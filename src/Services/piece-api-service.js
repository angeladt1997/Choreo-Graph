  
import TokenService from '../Services/token-service'
import config from '../config'

const PieceApiService = {
  getPieces(){
    return fetch(`${config.API_ENDPOINT}/piece`, {
      headers: {
        'content-type': 'application/json',
        'authorization': `bearer ${TokenService.getAuthToken()}`,
      },
    })  
    .then(res =>
      (!res.ok)
        ? res.json().then(e => Promise.reject(e))
        : res.json()
    )
  },
  getTargetPiece(pieceId){
    return fetch(`${config.API_ENDPOINT}/piece/`, {
      headers: {
        'content-type': 'application/json',
        'authorization': `bearer ${TokenService.getAuthToken()}`,
      },
    })  
    .then(res => 
      (!res.ok)
        ? res.json().then(e => Promise.reject(e))
        : res.json()
    )
  },
  changeStep(pieceId, stepTitle, stepContent){
    return fetch(`${config.API_ENDPOINT}/piece/${pieceId}`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'authorization': `bearer ${TokenService.getAuthToken()}`,
      },
      body: JSON.stringify({
        stepTitle ,
        stepContent
      }),
    })
    .then(res => 
      (!res.ok)
      ? res.json().then(e => Promise.reject(e))
      : res.json()
    )
  },
  createPiece(){
    return fetch(`${config.API_ENDPOINT}/piece`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'authorization': `bearer ${TokenService.getAuthToken()}`,
      },
      body: JSON.stringify({}),
    })  
    .then(res => {
      console.log("res", res)
      return (!res.ok)
        ? res.json().then(e => Promise.reject(e))
        : res.json()
    })
  }
}

export default PieceApiService
