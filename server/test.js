
import chai from 'chai';
import chaiHttp from 'chai-http';
import app from './index';

chai.use(chaiHttp);
chai.should();


describe('/POST Create user', () => {
    it('Create user Testing', () => {
        let user = {
            'username': 'esther',
            'password':'esther12345',
        }
        chai.request(app)
            .post('/api/v1/auth/userSignup/')
            .send(user)
            .end((err, res) => {

            });
        });
    });
    