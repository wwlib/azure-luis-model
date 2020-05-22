# azure-luis-model

This is an example repo that demonstrates an npm-style workflow for developing, testing and deploying LUIS NLU models.

### installation
```
npm install
```

### model development

The `lu` folder contains the .lu file(s) that define the NLU model.

Edit this file to update the model.

### LUIS api using the botframework-cli

The full set of botframework-cli command is described here:
- https://github.com/microsoft/botframework-cli/blob/master/packages/luis/README.md

### convenience nmp scripts

These scripts automate the most frequently used botframework-cli commands:

#### upload to LUIS

The .lu file in the `lu` folder can be uploaded manually usign the tools at http://luis.ai/

#### build a JSON version of the model

Models can uploaded/deployed as .lu files or as .json files. To build the .json file from the .lu source file(s):

```
npm run build:json
```

The output, `converted.json`, will be saved to the `luis-json` folder.

#### import (upload) the JSON version of the model

Builds the .json version of the model and then imports it (uploads it) to LUIS.
```
npm run import
```

#### train

```
npm run train -- --version  0.3
```


### tools

The `tools` folder contains scripts that can be used to test Azure Speech and LUIS services via the service apis. These include:
- test-azure-speech.js
    - listens to the mic for 3 seconds and send the audio to Aszure ASR
    - asr results are ouput to the console
- test-azure-tts.js
    - sends a tts reqest to Azure TTS
    - audio output is saved to `tts-out.wav`
- test-luis-nlu.js
    - sends the text `what time is it` to LUIS NLU (the active model)
    - nlu results are ouput to the console
