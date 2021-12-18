export class BlogPosts {
  getAllPosts() {
    return cy.request({
      method: 'GET',
      url: '/posts',
    });
  }

  getPostsByUser(userId) {
    return cy.request({
      method: 'GET',
      url: '/posts',
      qs: { userId },
    });
  }

  getPost(id, otherOptions) {
    const requestOptions = {
      method: 'GET',
      url: `/posts/${id}`,
    };
    if (otherOptions) {
      Object.assign(requestOptions, otherOptions);
    }
    return cy.request(requestOptions);
  }

  addPost(post) {
    return cy.request({
      method: 'POST',
      url: '/posts',
      body: post,
    });
  }

  updatePost(id, update, otherOptions) {
    const requestOptions = {
      method: 'PUT',
      url: `/posts/${id}`,
      body: update,
    };
    if (otherOptions) {
      Object.assign(requestOptions, otherOptions);
    }
    return cy.request(requestOptions);
  }

  deletePost(id, otherOptions) {
    const requestOptions = {
      method: 'DELETE',
      url: `/posts/${id}`,
    };
    if (otherOptions) {
      Object.assign(requestOptions, otherOptions);
    }
    return cy.request(requestOptions);
  }
}
