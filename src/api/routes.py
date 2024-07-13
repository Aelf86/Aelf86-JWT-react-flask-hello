"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
import os
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
from api.utils import generate_sitemap, APIException
from flask_cors import CORS
from flask_jwt_extended import create_access_token
from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import jwt_required
import json

api = Blueprint('api', __name__)

# Allow CORS requests to this API
CORS(api)


@api.route("/token", methods=["POST"])
def create_token():
    email = request.json.get("email", None)
    password = request.json.get("password", None)

    user=User.query.filter_by(email=email).first()
    if user is None: 
        return jsonify({"msg": "Bad username or password"}), 401
    
    if email != user.email or password != user.password:
        return jsonify({"msg": "Bad username or password"}), 401

    access_token = create_access_token(identity=email)
    response_body={
        "access_token":access_token,
        "user":user.serialize()
    }
    return jsonify(response_body),200

@api.route("/register", methods=["POST"])
def create_register():
    body=json.loads(request.data)

    user=User.query.filter_by(email=body["email"]).first()
    if user is None: 
        new_user=User(
            email=body["email"],
            password=body["password"],
            name=body["name"],
            lastname=body["lastname"],
            is_active=True
        )
        db.session.add(new_user)
        db.session.commit()
        return jsonify({"msg":"usuario_creado"}), 200
    
    return jsonify({"msg": "User already exists"}), 404
