import picamera

from google.cloud import vision
client = vision.ImageAnnotatorClient()

import firebase_admin
import json

from firebase_admin import db
from firebase_admin import credentials

from adafruit_servokit import ServoKit
kit = ServoKit(channels=16)
import time

cred = credentials.Certificate('/home/pi/Desktop/google-services.json')
default_app = firebase_admin.initialize_app(cred,{'databaseURL': 'URL'})

def takephoto():
    camera = picamera.PiCamera()
    camera.capture('image.jpg')
    camera.close()

def main():
    takephoto() 

    with open('image.jpg', 'rb') as image_file:
        content = image_file.read()

    image = vision.Image(content=content)

    response = client.logo_detection(image=image)


    response = client.label_detection(image=image)
    labels = response.label_annotations
    print('Labels:')

    for label in labels:
        print(label.description)
		
		if label contains "plastic":
			push()

def push():
    ref = db.reference("/messages/ID")
	
    ref.child('original').set('1')

def dispense():
        kit.servo[0].angle = 170-80
        kit.servo[15].angle = 0+80
        time.sleep(2)
        kit.servo[0].angle = 165
        kit.servo[15].angle = 0

if __name__ == '__main__':
    while True:
        i = input("")
        if i == 'd':
            dispense()
        if i == 'i':
            main()
    #push()
    #takephoto()
    #main()
