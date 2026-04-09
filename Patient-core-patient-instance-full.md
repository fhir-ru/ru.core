# core-patient-instance-full - v1

* [**Table of Contents**](toc.md)
* [**Artifacts Summary**](artifacts.md)
* **core-patient-instance-full**

## Example Patient: core-patient-instance-full

Profile: [Core Patient (Пациент)](StructureDefinition-core-patient.md)

Мария-Антуанетта Иоганновна Габсбург-Лотарингская (official) Female, DoB: 1955-01-10 ( 6)

-------

| | |
| :--- | :--- |
| Other Ids: | * TAX/463217055385
* 1/7412 809982
* SB/152-873-614 14
 |
| Contact Detail | * [+7 960 700 5745](tel:+79607005745)
* [+7 999 800 5577](tel:+79998005577)
* Россия, г. Санкт-Петербург, Софийская ул., д.32-1-987(home)
 |



## Resource Content

```json
{
  "resourceType" : "Patient",
  "id" : "core-patient-instance-full",
  "meta" : {
    "profile" : ["https://fhir.ru/ig/core/StructureDefinition/core-patient"]
  },
  "identifier" : [{
    "type" : {
      "coding" : [{
        "system" : "https://fhir.ru/ig/core/CodeSystem/core-cs-nsi-identity-document",
        "code" : "6"
      }]
    },
    "system" : "http://fhir.ru/core/systems/birth-certificate",
    "value" : "IIЮБ-123456"
  },
  {
    "type" : {
      "coding" : [{
        "code" : "TAX"
      }]
    },
    "system" : "http://fhir.ru/core/systems/inn",
    "value" : "463217055385"
  },
  {
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
        "code" : "SB"
      }]
    },
    "system" : "http://fhir.ru/core/systems/snils",
    "value" : "152-873-614 14"
  }],
  "name" : [{
    "use" : "official",
    "family" : "Габсбург-Лотарингская",
    "given" : ["Мария-Антуанетта", "Иоганновна"]
  }],
  "telecom" : [{
    "system" : "phone",
    "value" : "+7 960 700 5745",
    "use" : "mobile"
  },
  {
    "system" : "phone",
    "value" : "+7 999 800 5577",
    "use" : "work"
  }],
  "gender" : "female",
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
