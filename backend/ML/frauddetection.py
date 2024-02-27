
import pandas as pd
import numpy as np
import sklearn 
from matplotlib import gridspec
import joblib

from scipy.stats import norm
from scipy.stats import multivariate_normal 
from sklearn.preprocessing import MinMaxScaler
import matplotlib.pyplot as plt
import seaborn as sns

data = pd.read_csv("creditcard.csv")

data.head()

print("missing values:",data.isnull().values.any())

data.shape

data.describe()

fraud = data[data['Class']==1]
genuine = data[data['Class']==0]
outlier_fraction = len(fraud)/float(len(genuine))
print(outlier_fraction)

count_fraud = len(data[data['Class']==1])
count_genuine = len(data[data['Class']==0])

print("Fraud transactions:",count_fraud)
print("Genuine transactions:",count_genuine)

fraud.Amount.describe() #description of transactions which were fraud

genuine.Amount.describe()

corrmatx = data.corr()
fig = plt.figure(figsize = (12,9))
sns.heatmap(corrmatx, vmax = 0.8, square=True)
plt.show()

X=data.drop(['Class'],axis=1)
Y=data['Class']
print(X.shape)
print(Y.shape)

Xdata = X.values
Ydata = Y.values 

from sklearn.model_selection import train_test_split
X_train,X_test,Y_train,Y_test = train_test_split(Xdata,Ydata,test_size = 0.2, random_state = 42)

from sklearn.ensemble import RandomForestClassifier
rfc = RandomForestClassifier()
rfc.fit(X_train,Y_train)

joblib.dump(rfc,'fraudmodel1.joblib')

YPred = rfc.predict(X_test)

from sklearn.metrics import classification_report, accuracy_score
from sklearn.metrics import precision_score, recall_score
from sklearn.metrics import f1_score, matthews_corrcoef
from sklearn.metrics import confusion_matrix

n_outliers = len(fraud)
n_error = (YPred != Y_test).sum()
print ("The model is Random Forest Classifier")

acc = accuracy_score(Y_test,YPred)
print("The accuracy score is {}".format(acc))

prec_score = precision_score(Y_test,YPred)
print("The precision score is {}".format(prec_score))

import numpy as np

rec = recall_score(Y_test,YPred)
print("The recall is {}".format(rec))

f1_score = f1_score(Y_test,YPred)
print("The f1 score is {}".format(f1_score))

mathews_corr = matthews_corrcoef(Y_test,YPred)
print("The matthews corrcoef is {}".format(mathews_corr))
 
Labels = ['Normal','Fraud']
conf_matrix =confusion_matrix(Y_test,YPred)
plt.figure(figsize=(12,12))
sns.heatmap(conf_matrix, xticklabels = Labels, yticklabels = Labels, annot=True, fmt="d")
plt.title("Confusion Matrix")
plt.ylabel("True class")
plt.xlabel("Predicted class")
plt.show()



