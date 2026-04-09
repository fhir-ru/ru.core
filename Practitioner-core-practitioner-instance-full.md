# core-practitioner-instance-full - v1

* [**Table of Contents**](toc.md)
* [**Artifacts Summary**](artifacts.md)
* **core-practitioner-instance-full**

## Example Practitioner: core-practitioner-instance-full

Profile: [Core Practitioner (Врач/сотрудник)](StructureDefinition-core-practitioner.md)

**identifier**: [Core_Ns_Rf_INN](NamingSystem-core-ns-rf-inn.md)/463217055385, 1/7412 809982, [Core_Ns_Rf_SNILS](NamingSystem-core-ns-rf-snils.md)/152-873-614 14

**name**: Мария Ивановна Иванова (Official)

**address**: Россия, г. Санкт-Петербург, Софийская ул., д.32-1-987(home)

**gender**: Female



## Resource Content

```json
{
  "resourceType" : "Practitioner",
  "id" : "core-practitioner-instance-full",
  "meta" : {
    "profile" : ["https://fhir.ru/ig/core/StructureDefinition/core-practitioner"]
  },
  "identifier" : [{
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
    "system" : "http://fhir.ru/core/systems/snils",
    "value" : "152-873-614 14"
  }],
  "name" : [{
    "use" : "official",
    "family" : "Иванова",
    "given" : ["Мария", "Ивановна"]
  }],
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
  }],
  "gender" : "female"
}

```
