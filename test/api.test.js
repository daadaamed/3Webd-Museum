/** @format */
import axios from 'axios';
import assert from 'assert';


describe('verify if we can get an article from the API', () => {

  it('should get the article with id=1', () => {

    const url = "https://collectionapi.metmuseum.org/public/collection/v1/objects/1";

    return axios.get(url).then(request => {
      let article = request.data;
      assert.equal(article.objectID, 1);
    })
    
  });
});
