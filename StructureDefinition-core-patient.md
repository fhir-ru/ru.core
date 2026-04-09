# Core Patient (Пациент) - v1

* [**Table of Contents**](toc.md)
* [**Artifacts Summary**](artifacts.md)
* **Core Patient (Пациент)**

## Resource Profile: Core Patient (Пациент) 

| | |
| :--- | :--- |
| *Official URL*:https://fhir.ru/ig/core/StructureDefinition/core-patient | *Version*:1 |
| Active as of 2026-04-09 | *Computable Name*:Core_Patient |

 
Пациент 

Профиль Core Patient ресурса Patient отражает национальные особенности ведения информации о физических лицах при оказании им медицинской помощи. • Наличие отчества • Указание пола по справочнику МЗ РФ • Указание адреса по национальной адресной системе • Возможность идентификации пациента с помощью документа, удостоверяющего личность, номера в налоговой или пенсионной системе, страхового полиса, номера медицинской карты

Профиль может быть использован в типовых ситуациях обмена медицинской информацией, таких как передача медицинских документов, заказ и передача результатов исследований; в то же время, для специфических задач, таких как федеральные или региональные индексы пациентов, или обмен деперсонифицированной медицинской информацией, могут потребоваться профили, наследованные от Core Patient. В случае, когда пациент оплачивает медицинскую помощь из собственных средств, должен быть использован профиль Core Patient Payer.

**Usages:**

* Derived from this Profile: [Core Patient Payer (Пациент - плательщик)](StructureDefinition-core-patient-payer.md)
* Refer to this Profile: [Core Coverage (Источник финансирования)](StructureDefinition-core-coverage.md), [Core Observation (Измерения и простые утверждения о пациенте)](StructureDefinition-core-observation.md), [Core Related Person (Лицо, имеющее связь с пациентом)](StructureDefinition-core-related-person.md) and [Core Service Request (Заказ услуги)](StructureDefinition-core-servicerequest.md)
* Examples for this Profile: [Patient/core-patient-instance-full](Patient-core-patient-instance-full.md)

You can also check for [usages in the FHIR IG Statistics](https://packages2.fhir.org/xig/ru.core|current/StructureDefinition/core-patient)

### Formal Views of Profile Content

 [Description of Profiles, Differentials, Snapshots and how the different presentations work](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#structure-definitions). 

 

Other representations of profile: [CSV](StructureDefinition-core-patient.csv), [Excel](StructureDefinition-core-patient.xlsx), [Schematron](StructureDefinition-core-patient.sch) 



## Resource Content

```json
{
  "resourceType" : "StructureDefinition",
  "id" : "core-patient",
  "url" : "https://fhir.ru/ig/core/StructureDefinition/core-patient",
  "version" : "1",
  "name" : "Core_Patient",
  "title" : "Core Patient (Пациент)",
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
  "description" : "Пациент",
  "fhirVersion" : "4.3.0",
  "mapping" : [{
    "identity" : "rim",
    "uri" : "http://hl7.org/v3",
    "name" : "RIM Mapping"
  },
  {
    "identity" : "cda",
    "uri" : "http://hl7.org/v3/cda",
    "name" : "CDA (R2)"
  },
  {
    "identity" : "w5",
    "uri" : "http://hl7.org/fhir/fivews",
    "name" : "FiveWs Pattern Mapping"
  },
  {
    "identity" : "v2",
    "uri" : "http://hl7.org/v2",
    "name" : "HL7 v2 Mapping"
  },
  {
    "identity" : "loinc",
    "uri" : "http://loinc.org",
    "name" : "LOINC code for the element"
  }],
  "kind" : "resource",
  "abstract" : false,
  "type" : "Patient",
  "baseDefinition" : "http://hl7.org/fhir/StructureDefinition/Patient",
  "derivation" : "constraint",
  "differential" : {
    "element" : [{
      "id" : "Patient",
      "path" : "Patient"
    },
    {
      "id" : "Patient.identifier",
      "path" : "Patient.identifier",
      "slicing" : {
        "discriminator" : [{
          "type" : "value",
          "path" : "system"
        }],
        "description" : "Нарезка по типам идентификаторов пациента - Паспорт РФ, ИНН, СНИЛС, полис ОМС, свидетельство о рождении, номер пациента в МИС",
        "rules" : "open"
      }
    },
    {
      "id" : "Patient.identifier:birthCertificate",
      "path" : "Patient.identifier",
      "sliceName" : "birthCertificate",
      "short" : "Государственное свидетельство о рождении",
      "min" : 0,
      "max" : "1"
    },
    {
      "id" : "Patient.identifier:birthCertificate.type",
      "path" : "Patient.identifier.type",
      "short" : "Тип идентификатора, кодируется по НСИ",
      "min" : 1,
      "patternCodeableConcept" : {
        "coding" : [{
          "system" : "https://fhir.ru/ig/core/CodeSystem/core-cs-nsi-identity-document",
          "code" : "6"
        }]
      },
      "binding" : {
        "strength" : "required",
        "valueSet" : "https://fhir.ru/ig/core/ValueSet/core-vs-nsi-identity-documents"
      }
    },
    {
      "id" : "Patient.identifier:birthCertificate.system",
      "path" : "Patient.identifier.system",
      "min" : 1,
      "patternUri" : "http://fhir.ru/core/systems/birth-certificate"
    },
    {
      "id" : "Patient.identifier:INN",
      "path" : "Patient.identifier",
      "sliceName" : "INN",
      "short" : "Государственный идентификационный номер налогоплательщика (ИНН)",
      "min" : 0,
      "max" : "1"
    },
    {
      "id" : "Patient.identifier:INN.type",
      "path" : "Patient.identifier.type",
      "short" : "Тип идентификатора, кодируется по Fixed value: http://terminology.hl7.org/CodeSystem/v2-0203",
      "min" : 1,
      "patternCodeableConcept" : {
        "coding" : [{
          "code" : "TAX"
        }]
      }
    },
    {
      "id" : "Patient.identifier:INN.system",
      "path" : "Patient.identifier.system",
      "min" : 1,
      "patternUri" : "http://fhir.ru/core/systems/inn"
    },
    {
      "id" : "Patient.identifier:SNILS",
      "path" : "Patient.identifier",
      "sliceName" : "SNILS",
      "short" : "Страховой номер индивидуального лицевого счёта, СНИЛС — уникальный номер индивидуального лицевого счёта застрахованного лица в системе обязательного пенсионного страхования",
      "min" : 0,
      "max" : "1"
    },
    {
      "id" : "Patient.identifier:SNILS.type",
      "path" : "Patient.identifier.type",
      "short" : "Тип идентификатора, кодируется по Fixed value: http://terminology.hl7.org/CodeSystem/v2-0203",
      "min" : 1,
      "patternCodeableConcept" : {
        "coding" : [{
          "code" : "SB"
        }]
      }
    },
    {
      "id" : "Patient.identifier:SNILS.system",
      "path" : "Patient.identifier.system",
      "min" : 1,
      "patternUri" : "http://fhir.ru/core/systems/snils"
    },
    {
      "id" : "Patient.identifier:passportRF",
      "path" : "Patient.identifier",
      "sliceName" : "passportRF",
      "short" : "Паспорт гражданина Российской Федерации",
      "min" : 0,
      "max" : "1"
    },
    {
      "id" : "Patient.identifier:passportRF.type",
      "path" : "Patient.identifier.type",
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
      "id" : "Patient.identifier:passportRF.system",
      "path" : "Patient.identifier.system",
      "min" : 1,
      "patternUri" : "http://fhir.ru/core/systems/passport-RF"
    },
    {
      "id" : "Patient.name",
      "path" : "Patient.name",
      "short" : "ФИО пациента"
    },
    {
      "id" : "Patient.name.use",
      "path" : "Patient.name.use",
      "short" : "Тип имени пациента. Рекомендуемое значение: official"
    },
    {
      "id" : "Patient.name.family",
      "path" : "Patient.name.family",
      "short" : "Фамилия пациента"
    },
    {
      "id" : "Patient.name.given",
      "path" : "Patient.name.given",
      "short" : "Имя и отчество пациента. Первым должно идти имя, вторым - отчество"
    },
    {
      "id" : "Patient.gender",
      "path" : "Patient.gender",
      "short" : "Пол пациента. Используются позиции: male | female | unknown. Other - не используется для совместимости со Справочником НСИМЗ Пол пациента"
    },
    {
      "id" : "Patient.address",
      "path" : "Patient.address",
      "short" : "Адрес пациента",
      "type" : [{
        "code" : "Address",
        "profile" : ["https://fhir.ru/ig/core/StructureDefinition/core-address"]
      }]
    }]
  }
}

```
