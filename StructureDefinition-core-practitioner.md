# Core Practitioner (Врач/сотрудник) - v1

* [**Table of Contents**](toc.md)
* [**Artifacts Summary**](artifacts.md)
* **Core Practitioner (Врач/сотрудник)**

## Resource Profile: Core Practitioner (Врач/сотрудник) 

| | |
| :--- | :--- |
| *Official URL*:https://fhir.ru/ig/core/StructureDefinition/core-practitioner | *Version*:1 |
| Active as of 2026-04-09 | *Computable Name*:Core_Practitioner |

 
Врач, медицинский работник, специалист 

Профиль Core Practitioner ресурса Practitioner отражает особенности ведения информации о медицинских работниках • Наличие отчества • Указание пола по справочнику МЗ РФ • Указание адреса по национальной адресной системе • Возможность идентификации сотрудника с помощью документа, удостоверяющего личность, номера в налоговой или пенсионной системе

Профиль может быть использован в типовых ситуациях обмена медицинской информацией, таких как передача медицинских документов, заказ и передача результатов исследований. Профиль не предназначен для передачи специфической информации, например сведений о документах, подтверждающих права сотрудника на оказание медицинской помощи, или ведения кадрового учета в организации.

**Usages:**

* Refer to this Profile: [Core Observation (Измерения и простые утверждения о пациенте)](StructureDefinition-core-observation.md) and [Core PractitionerRole (Роль/должность сотрудника)](StructureDefinition-core-practitioner-role.md)
* Examples for this Profile: [Practitioner/core-practitioner-instance-full](Practitioner-core-practitioner-instance-full.md)

You can also check for [usages in the FHIR IG Statistics](https://packages2.fhir.org/xig/ru.core|current/StructureDefinition/core-practitioner)

### Formal Views of Profile Content

 [Description of Profiles, Differentials, Snapshots and how the different presentations work](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#structure-definitions). 

 

Other representations of profile: [CSV](StructureDefinition-core-practitioner.csv), [Excel](StructureDefinition-core-practitioner.xlsx), [Schematron](StructureDefinition-core-practitioner.sch) 



## Resource Content

```json
{
  "resourceType" : "StructureDefinition",
  "id" : "core-practitioner",
  "url" : "https://fhir.ru/ig/core/StructureDefinition/core-practitioner",
  "version" : "1",
  "name" : "Core_Practitioner",
  "title" : "Core Practitioner (Врач/сотрудник)",
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
  "description" : "Врач, медицинский работник, специалист",
  "fhirVersion" : "4.3.0",
  "mapping" : [{
    "identity" : "v2",
    "uri" : "http://hl7.org/v2",
    "name" : "HL7 v2 Mapping"
  },
  {
    "identity" : "rim",
    "uri" : "http://hl7.org/v3",
    "name" : "RIM Mapping"
  },
  {
    "identity" : "servd",
    "uri" : "http://www.omg.org/spec/ServD/1.0/",
    "name" : "ServD"
  },
  {
    "identity" : "w5",
    "uri" : "http://hl7.org/fhir/fivews",
    "name" : "FiveWs Pattern Mapping"
  }],
  "kind" : "resource",
  "abstract" : false,
  "type" : "Practitioner",
  "baseDefinition" : "http://hl7.org/fhir/StructureDefinition/Practitioner",
  "derivation" : "constraint",
  "differential" : {
    "element" : [{
      "id" : "Practitioner",
      "path" : "Practitioner"
    },
    {
      "id" : "Practitioner.identifier",
      "path" : "Practitioner.identifier",
      "slicing" : {
        "discriminator" : [{
          "type" : "value",
          "path" : "system"
        }],
        "description" : "Нарезка по типам идентификаторов специалиста - Паспорт РФ, ИНН, СНИЛС",
        "rules" : "open"
      }
    },
    {
      "id" : "Practitioner.identifier:INN",
      "path" : "Practitioner.identifier",
      "sliceName" : "INN",
      "short" : "Государственный идентификационный номер налогоплательщика (ИНН)",
      "min" : 0,
      "max" : "1"
    },
    {
      "id" : "Practitioner.identifier:INN.type",
      "path" : "Practitioner.identifier.type",
      "short" : "Тип идентификатора, кодируется по НСИ"
    },
    {
      "id" : "Practitioner.identifier:INN.system",
      "path" : "Practitioner.identifier.system",
      "min" : 1,
      "patternUri" : "http://fhir.ru/core/systems/inn"
    },
    {
      "id" : "Practitioner.identifier:SNILS",
      "path" : "Practitioner.identifier",
      "sliceName" : "SNILS",
      "short" : "Страховой номер индивидуального лицевого счёта, СНИЛС — уникальный номер индивидуального лицевого счёта застрахованного лица в системе обязательного пенсионного страхования",
      "min" : 0,
      "max" : "1"
    },
    {
      "id" : "Practitioner.identifier:SNILS.type",
      "path" : "Practitioner.identifier.type",
      "short" : "Тип идентификатора, кодируется по НСИ"
    },
    {
      "id" : "Practitioner.identifier:SNILS.system",
      "path" : "Practitioner.identifier.system",
      "min" : 1,
      "patternUri" : "http://fhir.ru/core/systems/snils"
    },
    {
      "id" : "Practitioner.identifier:passportRF",
      "path" : "Practitioner.identifier",
      "sliceName" : "passportRF",
      "short" : "Паспорт гражданина Российской Федерации",
      "min" : 0,
      "max" : "1"
    },
    {
      "id" : "Practitioner.identifier:passportRF.type",
      "path" : "Practitioner.identifier.type",
      "short" : "Тип идентификатора, кодируется по НСИ",
      "min" : 1,
      "patternCodeableConcept" : {
        "coding" : [{
          "system" : "https://fhir.ru/ig/core/CodeSystem/core-cs-nsi-identity-document",
          "code" : "1"
        }]
      },
      "binding" : {
        "strength" : "required",
        "valueSet" : "https://fhir.ru/ig/core/ValueSet/core-vs-nsi-identity-documents"
      }
    },
    {
      "id" : "Practitioner.identifier:passportRF.system",
      "path" : "Practitioner.identifier.system",
      "min" : 1,
      "patternUri" : "http://fhir.ru/core/systems/passport-RF"
    },
    {
      "id" : "Practitioner.address",
      "path" : "Practitioner.address",
      "type" : [{
        "code" : "Address",
        "profile" : ["https://fhir.ru/ig/core/StructureDefinition/core-address"]
      }]
    },
    {
      "id" : "Practitioner.gender",
      "path" : "Practitioner.gender",
      "short" : "Пол специалиста. Используются позиции: male | female | unknown. Other - не используется для совместимости со Справочником НСИМЗ Пол пациента"
    },
    {
      "id" : "Practitioner.qualification.code",
      "path" : "Practitioner.qualification.code",
      "binding" : {
        "strength" : "required",
        "valueSet" : "http://terminology.hl7.org/ValueSet/v2-0360"
      }
    }]
  }
}

```
