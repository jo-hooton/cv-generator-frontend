class API {
  static init() {
    this.baseUrl = "http://localhost:3001";
    this.signinUrl = this.baseUrl + "/signin";
    this.validateUrl = this.baseUrl + "/validate";
    this.dashboardUrl = this.baseUrl + "/dashboard";
  }

  static signin(email, password) {
    return fetch("http://localhost:3001/signin", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email,
        password
      })
    }).then(resp => resp.json());
  }

  static validate() {
    const token = localStorage.getItem("token");
    return fetch(this.validateUrl, {
      headers: { Authorization: token }
    }).then(resp => resp.json());
  }

  static signup(email, password) {
    return fetch("http://localhost:3001/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email,
        password
      })
    }).then(resp => resp.json());
  }

  static newCV(user_id, title, bio, experience, education, skills) {
    return fetch("http://localhost:3001/cvs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        user_id,
        title,
        bio,
        experience,
        education,
        skills
      })
    });
  }

  static newTextItem(title, content, cv_id) {
    return (
      fetch("http://localhost:3001/text_items"),
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringyfy({
          title,
          content,
          cv_id
        })
      }
    );
  }

  static newList(title, cv_id) {
    return (
      fetch("http://localhost:3001/lists"),
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringyfy({
          title,
          cv_id
        })
      }
    );
  }

  static newListItem(name, sub_heading, content, list_id) {
    return (
      fetch("http://localhost:3001/list_items"),
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringyfy({
          name,
          sub_heading,
          content,
          list_id
        })
      }
    );
  }

  static newContactDetail(address, phone_number, cv_id) {
    return (
      fetch("http://localhost:3001/contact_details"),
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringyfy({
          address,
          phone_number,
          cv_id
        })
      }
    );
  }

  static newSkill(name, percentage, cv_id) {
    return (
      fetch("http://localhost:3001/skills"),
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringyfy({
          name,
          percentage,
          cv_id
        })
      }
    );
  }
}

API.init();

window.API = API;

export default API;
