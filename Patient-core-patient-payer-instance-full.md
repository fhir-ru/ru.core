# core-patient-payer-instance-full - v1

* [**Table of Contents**](toc.md)
* [**Artifacts Summary**](artifacts.md)
* **core-patient-payer-instance-full**

## Example Patient: core-patient-payer-instance-full

Profile: [Core Patient Payer (Пациент - плательщик)](StructureDefinition-core-patient-payer.md)

Владимир Геннадиевич Корольков (official) Male, DoB: 1955-01-10 ( 1)

-------

| | |
| :--- | :--- |
| Other Id: | TAX/463217055385 |
| Contact Detail | Россия, г. Санкт-Петербург, Софийская ул., д.32-1-987(home) |



## Resource Content

```json
{
  "resourceType" : "Patient",
  "id" : "core-patient-payer-instance-full",
  "meta" : {
    "profile" : ["https://fhir.ru/ig/core/StructureDefinition/core-patient-payer"]
  },
  "identifier" : [{
    "type" : {
      "coding" : [{
        "system" : "https://fhir.ru/ig/core/CodeSystem/core-cs-nsi-identity-document",
        "code" : "1"
      }]
    },
    "system" : "http://fhir.ru/core/systems/passport-RF",
    "value" : "7412 809982"
  },
  {
    "type" : {
      "coding" : [{
        "code" : "TAX"
      }]
    },
    "system" : "http://fhir.ru/core/systems/inn",
    "value" : "463217055385"
  }],
  "name" : [{
    "use" : "official",
    "family" : "Корольков",
    "given" : ["Владимир", "Геннадиевич"]
  }],
  "gender" : "male",
  "birthDate" : "1955-01-10",
  "address" : [{
    "extension" : [{
      "extension" : [{
        "url" : "aoguid",
        "valueIdentifier" : {
          "system" : "urn:hl7-ru:fias:aoguid",
          "value" : "7b1996be-c0fe-4797-bedc-f503e31a83fd"
        }
      },
      {
        "url" : "houseguid",
        "valueIdentifier" : {
          "system" : "urn:hl7-ru:fias:houseguid",
          "value" : "7b1996be-c0fe-4797-bedc-f503e31a83fd"
        }
      }],
      "url" : "https://fhir.ru/ig/core/StructureDefinition/core-ex-address-fias"
    }],
    "use" : "home",
    "type" : "postal",
    "text" : "Россия, г. Санкт-Петербург, Софийская ул., д.32-1-987",
    "line" : ["Софийская 32-1-987"],
    "city" : "Санкт-Петербург",
    "state" : "Санкт-Петербург",
    "postalCode" : "192236",
    "country" : "Россия"
  }]
}

```
