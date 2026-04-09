# core-ns-rf-snils - v1

* [**Table of Contents**](toc.md)
* [**Artifacts Summary**](artifacts.md)
* **core-ns-rf-snils**

## NamingSystem: core-ns-rf-snils 

| | |
| :--- | :--- |
| *Official URL*:https://fhir.ru/ig/core/NamingSystem/core-ns-rf-snils | *Version*:1 |
| Active as of 2023-12-01 | *Computable Name*:Core_Ns_Rf_SNILS |

 
Страховой номер индивидуального лицевого счёта, СНИЛС — уникальный номер индивидуального лицевого счёта застрахованного лица в системе обязательного пенсионного страхования 



## Resource Content

```json
{
  "resourceType" : "NamingSystem",
  "id" : "core-ns-rf-snils",
  "extension" : [{
    "url" : "http://hl7.org/fhir/5.0/StructureDefinition/extension-NamingSystem.url",
    "valueUri" : "https://fhir.ru/ig/core/NamingSystem/core-ns-rf-snils"
  },
  {
    "url" : "http://hl7.org/fhir/5.0/StructureDefinition/extension-NamingSystem.version",
    "valueString" : "1"
  }],
  "name" : "Core_Ns_Rf_SNILS",
  "status" : "active",
  "kind" : "identifier",
  "date" : "2023-12-01",
  "publisher" : "HL7 FHIR Россия",
  "contact" : [{
    "name" : "HL7 FHIR Россия",
    "telecom" : [{
      "system" : "url",
      "value" : "https://fhir.ru"
    }]
  }],
  "description" : "Страховой номер индивидуального лицевого счёта, СНИЛС — уникальный номер индивидуального лицевого счёта застрахованного лица в системе обязательного пенсионного страхования",
  "uniqueId" : [{
    "type" : "uri",
    "value" : "http://fhir.ru/core/systems/snils",
    "preferred" : true
  }]
}

```
