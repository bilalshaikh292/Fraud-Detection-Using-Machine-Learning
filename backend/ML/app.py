from fastapi import FastAPI, Request, Response
from pydantic import BaseModel
import joblib
import uvicorn
from Frauddata import Frauddata

# Load the trained Random Forest Classifier model
model = joblib.load("fraudmodel.joblib")

app = FastAPI()


@app.post("/predict")
async def predict(data:Frauddata):
    data = data.dict()
    time=data['time']
    v1=data['v1']
    v2=data['v2']
    v3=data['v3']
    v4=data['v4']
    v5=data['v5']
    v6=data['v6']
    v7=data['v7']
    v8=data['v8']
    v9=data['v9']
    v10=data['v10']
    v11=data['v11']
    v12=data['v12']
    v13=data['v13']
    v14=data['v14']
    v15=data['v15']
    v16=data['v16']
    v17=data['v17']
    v18=data['v18']
    v19=data['v19']
    v20=data['v20']
    v21=data['v21']
    v22=data['v22']
    v23=data['v23']
    v24=data['v24']
    v25=data['v25']
    v26=data['v26']
    v27=data['v27']
    v28=data['v28']
    amount=data['amount']

    prediction = model.predict([[time,v1,v2,v3,v4,v5,v6,v7,v8,v9,v10,v11,v12,v13,v14,v15,v16,v17,v18,v19,v20,v21,v22,v23,v24,v25,v26,v27,v28,amount]])
 
    return {int(prediction[0])}

@app.get('/')
def index():
    return {'message':'Hello Strangerrrr'}

@app.get('/{name}')
def get_name(name: str):
    return {'Welcome': f'{name}'}

