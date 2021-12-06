function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

export  function login(user, pwd) {
   delay(2000)
  console.log(user,pwd+"ascy");
  if (user === "i" && pwd === "i") {
    console.log("aaaaaaaaaaaaaaaaa")
     return { loggedIn: true, lastName: "Smith", firstName: "Will" }
  } else {
    try{
      return { loggedIn: false }
    }catch{
      throw new Error()
    }
    
  }
}
