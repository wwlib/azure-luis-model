# azure-luis-model notes


### setup

```
npm i @microsoft/botframework-cli
npx bf
```

### exporting a LUIS model and converting it to .lu files
```
npx bf luis:version:export --appId <string> --versionId <string> --authoringKey <key>
```

### converting a LUIS model to .lu
```
npx bf luis:convert --in <LUISJsonFile> --out <out-directory>

bf luis:convert --in <folder with .lu files> --out <outputfolder> --name <luisAppName> --culture <luisAppCulture>]

```

### reference
- http://luis.ai/
- https://github.com/microsoft/botbuilder-tools/blob/master/packages/Ludown/docs/lu-file-format.md
- https://github.com/microsoft/botframework-cli/blob/master/packages/luis/docs/working-with-luis.md