

def azure_test():
    import urllib.request
    import json
    data = {
            "Inputs": {
            },
        "GlobalParameters":  {
        }
    }

    body = str.encode(json.dumps(data))

    url = 'https://ussouthcentral.services.azureml.net/workspaces/2590f6f2fd784d14ade4eb75199c89c2/services/90b4fcf7c8944bae9bd5759276293868/execute?api-version=2.0&format=swagger'
    api_key = 'V96VCJGSJ6KGRb/du/z9vfJGeS9o2TrVcVRgmES5Xiarxvl3k1TvzCiWhcM7GXuCWOD1Vig5V7XE4kAon0+IEA==' # Replace this with the API key for the web service
    headers = {'Content-Type':'application/json', 'Authorization':('Bearer '+ api_key)}

    req = urllib.request.Request(url, body, headers)

    try:
        response = urllib.request.urlopen(req)

        result = response.read()
        return result
        print(result)
    except urllib.error.HTTPError as error:
        print("The request failed with status code: " + str(error.code))

        # Print the headers - they include the requert ID and the timestamp, which are useful for debugging the failure
        print(error.info())
        print(json.loads(error.read().decode("utf8", 'ignore')))
