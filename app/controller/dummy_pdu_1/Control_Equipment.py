import time, os, random
import sys, argparse, ast, json

import socketio

sio = socketio.Client()
sio.connect('http://192.168.0.63:5001')

_FINISH = False
ThisFolder = os.path.abspath('.')
ParentFolder = os.path.abspath('..')

# Write function
def write(eq_type, eq_id, varname, value):
    try:
        with open('/home/pi/backendrack/bakend/smartrack-backend/app/controller/dummy_pdu_1/data/dummy_pdu.json') as json_data:
        #with open('~/backendrack/bakend/smartrack-backend/app/controller/dummy_pdu_1') as json_data:
            data = json.load(json_data)

        for i, item in enumerate(data["newValue"]):
            if item["var_name"] == varname:
                data["newValue"][i]["value"] = int(value)
                # print(data["newValue"][i])

        with open('/home/pi/backendrack/bakend/smartrack-backend/app/controller/dummy_pdu_1/data/dummy_pdu.json', 'w') as file:
        #with open('~/backendrack/bakend/smartrack-backend/app/controller/dummy_pdu_1', 'w') as file:
            file.write(json.dumps(data, indent=4))
        print(1)

        sio.emit('alert_in_data', "1")
        sio.emit('alert_in_data', "1")
    except:
        raise
        print(0)
        sio.emit('alert_in_data', "all Not Ok It means O as symbolic ")

# Main Function
def main(args):
    try:
        eq_type = args.eq_type
        eq_id = args.eq_id
        varname = args.varname
        value = args.value

        write(eq_type, eq_id, varname, value)
    except:
        raise
        print(0)
        sio.emit('alert_in_data', "all Not Ok It means O as symbolic ")


if __name__ == '__main__':
    parser = argparse.ArgumentParser()
    parser.add_argument("--eq_type", type=str, help="Equipment type", default=None)
    parser.add_argument("--eq_id", type=int, help="id of the equipment (id_profile)", default=None)
    parser.add_argument("--varname", type=str, help="Variable Name", default=None)
    parser.add_argument("--value", type=str, help="Variable Value", default=None)
    parser.add_argument("--alert", type=str, help="Variable Value", default=None)

    args = parser.parse_args(sys.argv[1:]);

    main(args);
