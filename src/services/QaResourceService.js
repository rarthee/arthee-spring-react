import axios from 'axios';
const QA_Resource_Service_API = 'http://localhost:8090/api/resources';
//const QA_Resource_Service_API = 'https://imdb8.p.rapidapi.com/auto-complete';
class QaResourceService {
    getResources() {

        return axios.get(QA_Resource_Service_API);
  }

  
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new QaResourceService();