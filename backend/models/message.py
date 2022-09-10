from db import db

class MessageModel(db.Model):
    __tablename__ = 'message'

    id = db.Column(db.Integer, primary_key=True)
    to = db.Column(db.Integer, nullable=False)
    message = db.Column(db.Text)
    
    
    def __repr__(self):
        return f'<Message: {self.to}>'
    
    def json(self):
        return {'id': self.id, 'to': self.to,'message':self.message}

    def save_to_db(self):
        db.session.add(self)
        db.session.commit()

    def delete_from_db(self):
        db.session.delete(self)
        db.session.commit()