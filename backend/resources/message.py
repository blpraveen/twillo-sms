from flask_restful import Resource,reqparse
from models.message import MessageModel
from flask import  jsonify, request,json
#from helpers.twillo import send_sms

class Message(Resource):
    parser = reqparse.RequestParser()
    def get(self):
        data = MessageModel.query.all()
        
        if data:
            return [s.json() for s in data]
        return {'message': 'Messages not found'}, 404
    
    def post(self):
        try:
            data = request
            data = request.get_json()
            #send_sms(data['to'],data['message'])
            message = MessageModel();
            message.to = data['to']
            message.message = data['message']
            message.save_to_db()
            return {'message': 'Messages Inserted'}, 200
        except Exception as ex:
            return  {'message': ex}, 400
    