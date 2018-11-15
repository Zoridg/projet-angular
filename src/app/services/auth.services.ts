export class AuthServices {
  isAuth = false;

  signIn(){
    return new Promise(
      (resolve, reject) => {
        setTimeout(
          () => {
            this.isAuth = true;
            resolve(true);
          }, 10
        );
      }
    );
  }

  signOut(){
    this.isAuth = false;
  }
}
