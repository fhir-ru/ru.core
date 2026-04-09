# Core Coverage (Источник финансирования) - v1

* [**Table of Contents**](toc.md)
* [**Artifacts Summary**](artifacts.md)
* **Core Coverage (Источник финансирования)**

## Resource Profile: Core Coverage (Источник финансирования) 

| | |
| :--- | :--- |
| *Official URL*:https://fhir.ru/ig/core/StructureDefinition/core-coverage | *Version*:1 |
| Active as of 2026-04-09 | *Computable Name*:Core_Coverage |

 
Источник финансирования 

Профиль Core Coverage ресурса Coverage отражает национальные требования к учету взаимоотношений между медицинской организацией и плательщиками при оплате медицинской помощи. • Использование справочников НСИ МЗ РФ для указания источника оплаты и документа-основания оплаты

Профиль может быть использован при передаче информации о медицинской помощи, которая предполагает оплату в рамках систем обязательного страхования, добровольного страхования, за счет средств пациента или иных физических или юридических лиц.

//пример требует исправления: у него идентификатор ОМСный, а плательщик – сам пациент

**Usages:**

* Examples for this Profile: [Coverage/core-coverage-instance-full](Coverage-core-coverage-instance-full.md)

You can also check for [usages in the FHIR IG Statistics](https://packages2.fhir.org/xig/ru.core|current/StructureDefinition/core-coverage)

### Formal Views of Profile Content

 [Description of Profiles, Differentials, Snapshots and how the different presentations work](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#structure-definitions). 

 

Other representations of profile: [CSV](StructureDefinition-core-coverage.csv), [Excel](StructureDefinition-core-coverage.xlsx), [Schematron](StructureDefinition-core-coverage.sch) 



## Resource Content

```json
{
  "resourceType" : "StructureDefinition",
  "id" : "core-coverage",
  "url" : "https://fhir.ru/ig/core/StructureDefinition/core-coverage",
  "version" : "1",
  "name" : "Core_Coverage",
  "title" : "Core Coverage (Источник финансирования)",
  "status" : "active",
  "date" : "2026-04-09T17:27:53+00:00",
  "publisher" : "HL7 FHIR Россия",
  "contact" : [{
    "name" : "HL7 FHIR Россия",
    "telecom" : [{
      "system" : "url",
      "value" : "https://fhir.ru"
    }]
  }],
  "description" : "Источник финансирования",
  "fhirVersion" : "4.3.0",
  "mapping" : [{
    "identity" : "workflow",
    "uri" : "http://hl7.org/fhir/workflow",
    "name" : "Workflow Pattern"
  },
  {
    "identity" : "rim",
    "uri" : "http://hl7.org/v3",
    "name" : "RIM Mapping"
  },
  {
    "identity" : "w5",
    "uri" : "http://hl7.org/fhir/fivews",
    "name" : "FiveWs Pattern Mapping"
  },
  {
    "identity" : "cdanetv4",
    "uri" : "http://www.cda-adc.ca/en/services/cdanet/",
    "name" : "Canadian Dental Association eclaims standard"
  },
  {
    "identity" : "v2",
    "uri" : "http://hl7.org/v2",
    "name" : "HL7 v2 Mapping"
  },
  {
    "identity" : "cpha3pharm",
    "uri" : "http://www.pharmacists.ca/",
    "name" : "Canadian Pharmacy Associaiton eclaims standard"
  }],
  "kind" : "resource",
  "abstract" : false,
  "type" : "Coverage",
  "baseDefinition" : "http://hl7.org/fhir/StructureDefinition/Coverage",
  "derivation" : "constraint",
  "differential" : {
    "element" : [{
      "id" : "Coverage",
      "path" : "Coverage"
    },
    {
      "id" : "Coverage.identifier",
      "path" : "Coverage.identifier",
      "slicing" : {
        "discriminator" : [{
          "type" : "value",
          "path" : "system"
        }],
        "description" : "Нарезка по типам документов-оснований для оплаты медицинских услуг. ОМС; ДМС; Контракт",
        "rules" : "open"
      }
    },
    {
      "id" : "Coverage.identifier:OMS",
      "path" : "Coverage.identifier",
      "sliceName" : "OMS",
      "short" : "Полис ОМС- обязательного медицинского страхования",
      "min" : 0,
      "max" : "1"
    },
    {
      "id" : "Coverage.identifier:OMS.type",
      "path" : "Coverage.identifier.type",
      "short" : "Тип идентификатора, кодируется по НСИ",
      "min" : 1,
      "patternCodeableConcept" : {
        "coding" : [{
          "system" : "https://fhir.ru/ig/core/CodeSystem/core-cs-nsi-coverage-document",
          "code" : "1"
        }]
      },
      "binding" : {
        "strength" : "required",
        "valueSet" : "https://fhir.ru/ig/core/ValueSet/core-vs-nsi-coverage-document"
      }
    },
    {
      "id" : "Coverage.identifier:OMS.system",
      "path" : "Coverage.identifier.system",
      "min" : 1,
      "patternUri" : "http://fhir.ru/core/systems/OMS"
    },
    {
      "id" : "Coverage.identifier:DMS",
      "path" : "Coverage.identifier",
      "sliceName" : "DMS",
      "short" : "Полис ДМС - добровольного медицинского страхования",
      "min" : 0,
      "max" : "1"
    },
    {
      "id" : "Coverage.identifier:DMS.type",
      "path" : "Coverage.identifier.type",
      "short" : "Тип идентификатора, кодируется по НСИ",
      "min" : 1,
      "patternCodeableConcept" : {
        "coding" : [{
          "system" : "https://fhir.ru/ig/core/CodeSystem/core-cs-nsi-coverage-document",
          "code" : "2"
        }]
      },
      "binding" : {
        "strength" : "required",
        "valueSet" : "https://fhir.ru/ig/core/ValueSet/core-vs-nsi-coverage-document"
      }
    },
    {
      "id" : "Coverage.identifier:DMS.system",
      "path" : "Coverage.identifier.system",
      "min" : 1,
      "patternUri" : "http://fhir.ru/core/systems/DMS"
    },
    {
      "id" : "Coverage.identifier:Contract",
      "path" : "Coverage.identifier",
      "sliceName" : "Contract",
      "short" : "Договор на оказание платных медицинских услугя",
      "min" : 0,
      "max" : "1"
    },
    {
      "id" : "Coverage.identifier:Contract.type",
      "path" : "Coverage.identifier.type",
      "short" : "Тип идентификатора, кодируется по НСИ",
      "min" : 1,
      "patternCodeableConcept" : {
        "coding" : [{
          "system" : "https://fhir.ru/ig/core/CodeSystem/core-cs-nsi-coverage-document",
          "code" : "3"
        }]
      },
      "binding" : {
        "strength" : "required",
        "valueSet" : "https://fhir.ru/ig/core/ValueSet/core-vs-nsi-coverage-document"
      }
    },
    {
      "id" : "Coverage.identifier:Contract.system",
      "path" : "Coverage.identifier.system",
      "min" : 1,
      "patternUri" : "http://fhir.ru/core/systems/Contract"
    },
    {
      "id" : "Coverage.type",
      "path" : "Coverage.type",
      "short" : "Тип страхового покрытия. Binding:  Core_Vs_Nsi_Sources_Of_Paymente(required) Справочник НСИ Минздрава Источники оплаты медицинской помощи"
    },
    {
      "id" : "Coverage.beneficiary",
      "path" : "Coverage.beneficiary",
      "short" : "Ссылка на пациента",
      "type" : [{
        "code" : "Reference",
        "targetProfile" : ["https://fhir.ru/ig/core/StructureDefinition/core-patient"]
      }]
    },
    {
      "id" : "Coverage.payor",
      "path" : "Coverage.payor",
      "short" : "Плательщик: пациент, родственник или организация",
      "type" : [{
        "code" : "Reference",
        "targetProfile" : ["https://fhir.ru/ig/core/StructureDefinition/core-organization-payer",
        "https://fhir.ru/ig/core/StructureDefinition/core-patient-payer",
        "https://fhir.ru/ig/core/StructureDefinition/core-related-person",
        "https://fhir.ru/ig/core/StructureDefinition/core-related-person-payer"]
      }]
    }]
  }
}

```
