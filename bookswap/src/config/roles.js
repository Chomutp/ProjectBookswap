const components = {
  welcome: {
    component: "Welcome",
    url: "/welcome"
  },
  login: {
    component: "Login",
    url: "/login"
  },
  register: {
    component: "Register",
    url: "/register"
  },
  mybook: {
    component: "Mybook",
    url: "/mybook"
  },
  addbook: {
    component: "Addbook",
    url: "/addbook"
  },
  store: {
    component: "Store",
    url: "/store"
  }
};

export default {
  admin: {
    routes: [...Object.values(components)]
  },
  user: {
    routes: [
      components.login,
      components.register,
      components.mybook,
      components.addbook,
      components.store
    ],
    redirect: ["/login"]
  },
  guest: {
    routes: [
      components.welcome,
      components.login,
      components.register,
      components.store
    ],
    redirect: ["/welcome"]
  }
};
