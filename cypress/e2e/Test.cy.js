describe('Test Cases APIs ', () => {


  it('Test Case 1: Get List of Post (GET/posts)', () => {
    cy.request('GET', '/posts').then((response) => {
      console.log('GET /posts Response:', response.body);
      expect(response.status).to.eq(200);
      expect(response.body).to.be.an('array');
      expect(response.body.length).to.be.greaterThan(0);
    })
   
  });

  it('Test Case 2: Create Post (POST/posts)', () => {
    cy.request('POST', '/posts', {
      title: 'new Post',
      body: 'This is a New Post',
      userId: 1,
    }).then((response) => {
      console.log('POST /post Response: ', response.body);
      expect(response.status).to.eq(201);
      expect(response.body).to.have.property('id');
      expect(response.body.title).to.eq('new Post');
    });
   
  });

  it('Test Case 3: Update Post (PUT/posts/1)', () => {
    cy.request('PUT', '/posts/1', {
      id: 1,
      title: 'Edit Post',
      body: 'This Is a Edit Post',
      userId: 1,
    }).then((response) =>{
      console.log('PUT /posts/1 Response: ', response.body);
      expect(response.status).to.eq(200);
      expect(response.body.title).to.eq('Edit Post');
    });
   
  });

  it('Test Case 4: Delete Post (DELETE/posts/1)', () => {
    cy.request('DELETE', '/posts/1').then((response) => {
      console.log('DELETE /posts/1 Response: ', response.body);
      expect(response.status).to.eq(200);

    });
   
  });


});