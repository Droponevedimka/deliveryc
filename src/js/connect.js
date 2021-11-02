
function getCookie(name) {
  var matches = document.cookie.match(new RegExp(
    "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
  ));
  return matches ? decodeURIComponent(matches[1]) : undefined;
}

export function Auth() {  
  
  return  axios({url: 'https://api.delivery-club.ru/api1.2/user/login', method: 'POST', withCredentials: true })
      .then(resp => {      
        document.cookie = `X-USER-AUTHORIZATION=${resp.data.token}.${resp.data.secret}`;         
        return resp
      })   
}

export function PostPhone(phone) {
      let gg = getCookie('X-USER-AUTHORIZATION');
      let bodyFormData = new FormData();
      
      bodyFormData.set('phone', phone)  
          
      return axios({url:'https://api.delivery-club.ru/api1.2/user/otp', data:bodyFormData, method:'post', withCredentials: true, headers: {'x-user-authorization': gg, 'Content-Type':'multipart/form-data'} })
          .then(resp => {         
            return resp
      })
    
}

export function PostUser(requestId, phoneCode) {
  let gg = getCookie('X-USER-AUTHORIZATION');
  let bodyFormData = new FormData();

  bodyFormData.set('request_id', requestId)  
  bodyFormData.set('otp', phoneCode)  
  return axios({url: 'https://api.delivery-club.ru/api1.2/user/login/otp', data:bodyFormData, method: 'POST', withCredentials: true, headers: {'x-user-authorization': gg, 'Content-Type':'multipart/form-data'} })
        .then(resp => {
        return resp            
        })        
}

export function GetUser() {  
    let gg = getCookie('X-USER-AUTHORIZATION');  
    return axios({url: 'https://api.delivery-club.ru/api1.2/landing/users-top-2019/stats', method:'GET', onDownloadProgress: progressEvent => {let percentCompleted = Math.floor((progressEvent.loaded * 100) / progressEvent.total); document.getElementById('loader-boy').style.marginLeft = `${Number(77 * (percentCompleted/100))}%`; console.log(percentCompleted);}, withCredentials: true, headers: {'x-user-authorization': gg} })
          .then(resp => {
          return resp            
          })        

}

export function GetPromo() {
        let gg = getCookie('X-USER-AUTHORIZATION'); 
        return  axios({url: 'https://api.delivery-club.ru/api1.2/landing/users-top-2019/promocodes', method: 'POST', withCredentials: true, headers: {'x-user-authorization': gg} })
          .then(resp => {
            return resp
          })      
}

export function GetImage(e){
        let gg = getCookie('X-USER-AUTHORIZATION'); 
        return  axios({url: e, method: 'GET', withCredentials: true, headers: {'x-user-authorization': gg} })
          .then(resp => {
            return resp
          })
}
 

