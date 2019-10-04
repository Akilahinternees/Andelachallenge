
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

    describe('/POST Create article', () => {
        it('Create article Testing', () => {
            let article = {
                'title': 'making money',
                'content':'online making money',
                'createdOn':'2019-10-04T10:38:33.237Z',
            }
            chai.request(app)
                .post('/api/v1/articles')
                .send(article)
                .end((err, res) => {
    
                });
            });
        });
    