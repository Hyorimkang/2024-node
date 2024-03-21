//비동기함수쓰면 동기함수보다 시간아낄수있음 
selTimeout(()=>console.log("5초경과"),5000);
selTimeout(()=>console.log("2초경과"),2000);