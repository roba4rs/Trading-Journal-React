import MetaTrader5 as mt
from datetime import datetime
from flask import Flask,jsonify 
from flask_cors import CORS
import pandas as pd

# Initialize MT5
mt.initialize()

# Login credentials. this datas has to be passed from the user front end/javascript
login = 0
password = ''
server = ''

# Loing into MT5
mt.login(login, password, server)

app = Flask(__name__)
CORS(app)

# Get all the account information for the current user
def get_account_info():
     return  mt.account_info()

# get all the trade history along with the total number of trades with in specific time windows
def get_trade_history():
    trade_history = mt.history_orders_get(datetime(2024,1,1), datetime.now())
    return  trade_history

# To get profit and loss
def profit_loss_included():
    profits_loss = mt.history_deals_get(datetime(2024,1,1), datetime.now())
    return  profits_loss


# get allt the current opened positions along with the total number of opened positions  
def get_opened_positions():
    return mt.positions_get()
# get the number of trades witht in 30 days
def number_of_trades():
    total_no_trades = mt.history_deals_total(datetime(2024,1,1), datetime.now())
    return total_no_trades

@app.route('/account-info', methods=['GET'])
def account_info():
    info = get_account_info()
    account_inf_d = info._asdict()
    return jsonify(account_inf_d)

@app.route('/trade-history', methods=['GET'])
def trade_history():
    history = get_trade_history()
    trade_d = [trade._asdict() for trade in history]

    return  jsonify(trade_d)

@app.route('/opened-positions', methods= ['GET'])
def opened_positions():
    positions = get_opened_positions()

    positions_dic = [trade._asdict() for trade in positions]

    def replace(timestamp):
        date = datetime.fromtimestamp(timestamp)
        return date.strftime("%d-%m-%Y")

    def update_value_in_dicts(dict_list, key, func):
        for d in dict_list:
            d[key] = func(d[key])

    update_value_in_dicts(positions_dic, 'time', replace)


    return jsonify(positions_dic)

@app.route('/proft-loss-included', methods= ['GET'])
def profit_loss():
    proft_loss = profit_loss_included()
    profit_loss_dic = [trade._asdict() for trade in proft_loss]

    id_to_objects = {}

    # Populate id_to_objects dictionary
    for obj in profit_loss_dic:
        obj_id = obj['position_id']
        if obj_id not in id_to_objects:
            id_to_objects[obj_id] = []
        id_to_objects[obj_id].append(obj)

    # Reconstruct unique_objects list by keeping the second occurrence of each id
    unique_objects = []
    only_profits = []
    for obj_list in id_to_objects.values():
        if len(obj_list) >= 2:
            unique_objects.append(obj_list[1])  # Keep the second occurrence
        else:
            unique_objects.append(obj_list[0])  # Keep the only occurrence if there's only one

    for i in unique_objects:
        only_profits.append(i['profit'])
    # Before returning the data, i need to filter out trades from running positions / trade history only need to display closed positions
    # Code goes here. need to accept the return from get_opened_positions() method and manipulate it here
   
    def replace(timestamp):
        date = datetime.fromtimestamp(timestamp)
        return date.strftime("%d-%m-%Y")

    def update_value_in_dicts(dict_list, key, func):
        for d in dict_list:
            d[key] = func(d[key])

    update_value_in_dicts(unique_objects, 'time', replace)


    return jsonify(unique_objects)

# Filter only the profit and jsonify as an array
@app.route('/only-profits-filtered', methods= ['GET'])
def filtered_profit():
    fileted_profits = profit_loss_included()
    filtered_dic = [trade._asdict() for trade in fileted_profits]

    id_to_objects = {}

    # Populate id_to_objects dictionary
    for obj in filtered_dic:
        obj_id = obj['position_id']
        if obj_id not in id_to_objects:
            id_to_objects[obj_id] = []
        id_to_objects[obj_id].append(obj)

    # Reconstruct unique_objects list by keeping the second occurrence of each id
    unique_objects = []
    only_profits = []
    for obj_list in id_to_objects.values():
        if len(obj_list) >= 2:
            unique_objects.append(obj_list[1])  # Keep the second occurrence
        else:
            unique_objects.append(obj_list[0])  # Keep the only occurrence if there's only one

    for i in unique_objects:
        if i['type'] != 2:
            
            only_profits.append(i['profit'])
   
    return jsonify(only_profits)

@app.route('/number-of-trades', methods= ['GET'])
def total_trades():
    total_no_trades = number_of_trades()
    total_dict = {'total': total_no_trades }
    return jsonify(total_dict)
if __name__ == "__main__":
    app.run( debug = True )
