# Artifacts Summary - v1

* [**Table of Contents**](toc.md)
* **Artifacts Summary**

## Artifacts Summary

This page provides a list of the FHIR artifacts defined as part of this implementation guide.

### Structures: Resource Profiles 

These define constraints on FHIR resources for systems conforming to this implementation guide.

| | |
| :--- | :--- |
| [ Core Encounter (Случай обслуживания)](StructureDefinition-core-encounter.md) | Cлучай оказания медицинской помощи, то есть взаимодействия между пациентом и системой здравоохранения с целью оказания медицинских услуг или оценки состояния здоровья пациентах |
| [Core Coverage (Источник финансирования)](StructureDefinition-core-coverage.md) | Источник финансирования |
| [Core Observation (Измерения и простые утверждения о пациенте)](StructureDefinition-core-observation.md) | Измерения и простые утверждения о пациенте, устройстве или других объектах |
| [Core Organisation Payer (Организация-плательщик)](StructureDefinition-core-organization-payer.md) | Организация плательщик |
| [Core Organization (Организация)](StructureDefinition-core-organization.md) | Организация |
| [Core Patient (Пациент)](StructureDefinition-core-patient.md) | Пациент |
| [Core Patient Payer (Пациент - плательщик)](StructureDefinition-core-patient-payer.md) | Пациент – плательщик, передача ИНН обязательна |
| [Core Practitioner (Врач/сотрудник)](StructureDefinition-core-practitioner.md) | Врач, медицинский работник, специалист |
| [Core PractitionerRole (Роль/должность сотрудника)](StructureDefinition-core-practitioner-role.md) | Роль (должность) врача, медицинского работника, специалиста |
| [Core Related Person (Лицо, имеющее связь с пациентом)](StructureDefinition-core-related-person.md) | Лицо, имеющее связь с пациентом |
| [Core Related Person Payer (Лицо-плательщик, имеющее связь с пациентом)](StructureDefinition-core-related-person-payer.md) | Лицо-плательщик, имеющее связь с пациентом |
| [Core Service Request (Заказ услуги)](StructureDefinition-core-servicerequest.md) | Заказ услуги |

### Structures: Data Type Profiles 

These define constraints on FHIR data types for systems conforming to this implementation guide.

| | |
| :--- | :--- |
| [Core Address (Адрес)](StructureDefinition-core-address.md) | Адрес |

### Structures: Extension Definitions 

These define constraints on FHIR data types for systems conforming to this implementation guide.

| | |
| :--- | :--- |
| [Core Extension address fias (Кодирование адреса по ФИАС)](StructureDefinition-core-ex-address-fias.md) | Кодирование адреса по ФИАС. При маппинге на СЭМД данный url соответствует urn:hl7-ru:fias |

### Terminology: Value Sets 

These define sets of codes used by systems conforming to this implementation guide.

| | |
| :--- | :--- |
| [Core ValueSet NSI coverage document (документы-основания для оплаты медицинских услуг)](ValueSet-core-vs-nsi-coverage-document.md) | документы-основания для оплаты медицинских услуг - набор из всех значений системы кодирования |
| [Core ValueSet NSI identity documents (Документы удостоверяющие личность)](ValueSet-core-vs-nsi-identity-documents.md) | Документы, удостоверяющие личность - набор из всех значений системы кодирования |
| [Core ValueSet NSI medical workers positions (Должности медицинских работников)](ValueSet-core-vs-nsi-medical-workers-positions.md) | Должности медицинских работников - набор из всех значений системы кодирования |
| [Core ValueSet NSI register of medical organizations (Реестр медицинских организаций Российской Федерации)](ValueSet-core-vs-nsi-register-of-medical-organizations.md) | Реестр медицинских организаций МЗРФ - набор из всех значений системы кодирования |
| [Core ValueSet NSI sources of payment (Источники оплаты медицинской помощи)](ValueSet-core-vs-nsi-sources-of-payment.md) | Источники оплаты медицинской помощи - набор из всех значений системы кодирования |
| [Core ValueSet types medical documentation (Виды медицинской документации)](ValueSet-core-vs-nsi-types-medical-documentation.md) | Виды медицинской документации - набор из всех значений системы кодирования |

### Terminology: Code Systems 

These define new code systems used by systems conforming to this implementation guide.

| | |
| :--- | :--- |
| [Core CodeSystem NSI Confidentiality (Уровень конфиденциальности медицинского документа)](CodeSystem-core-cs-nsi-confidentiality.md) | НСИ МЗ РФ справочник [Уровень конфиденциальности медицинского документа](http://fhir.ru/core/CodeSystem/core-cs-nsi-confidentiality) |
| [Core CodeSystem NSI Identity Documents (Документы удостоверяющие личность)](CodeSystem-core-cs-nsi-identity-document.md) | НСИ МЗ РФ справочник [документы удостоверяющие личность](http://fhir.ru/core/NamingSystem/core-ns-nsi-identity-document) |
| [Core CodeSystem NSI coverage document (Документы-основания для оплаты медицинских услуг)](CodeSystem-core-cs-nsi-coverage-document.md) | НСИ МЗ РФ справочник [Документы-основания для оплаты](http://fhir.ru/core/CodeSystem/core-cs-nsi-coverage-document) |
| [Core CodeSystem NSI medical workers positions (Должности медицинских работников)](CodeSystem-core-cs-nsi-medical-workers-positions.md) | НСИ МЗ РФ справочник [Должности медицинских и фармацевтических работников](http://fhir.ru/core/CodeSystem/core-cs-nsi-medical-workers-positions) |
| [Core CodeSystem NSI register of medical organizations (Реестр медицинских организаций)](CodeSystem-core-cs-nsi-register-of-medical-organizations.md) | НСИ МЗ РФ справочник [Реестр медицинских организаций](http://fhir.ru/core/CodeSystem/core-cs-nsi-register_of_ medical_organizations) |
| [Core CodeSystem NSI sources of payment (Источники оплаты медицинской помощи)](CodeSystem-core-cs-nsi-sources-of-payment.md) | НСИ МЗ РФ справочник [Источники оплаты медицинской помощи](http://fhir.ru/core/CodeSystem/core-cs-nsi-sources-of-payment) |
| [Core CodeSystem NSI types of medical documentation (Виды медицинской документации)](CodeSystem-core-cs-nsi-types-medical-documentation.md) | НСИ МЗ РФ справочник [Виды медицинской документации](http://fhir.ru/core/CodeSystem/core-cs-nsi-types-medical-documentation) |

### Terminology: Naming Systems 

These define identifier and/or code system identities used by systems conforming to this implementation guide.

| | |
| :--- | :--- |
| [core-ns-fias-aoguid](NamingSystem-core-ns-fias-aoguid.md) | Идентификатор адресного объекта по справочнику ФИАС |
| [core-ns-fias-houseguid](NamingSystem-core-ns-fias-houseguid.md) | Идентификатор дома по справочнику ФИАС |
| [core-ns-nsi-confidentiality](NamingSystem-core-ns-nsi-confidentiality.md) | Справочник НСИ Минздрава <Уровень конфиденциальности медицинского документа>, может быть известен под следующими идентификаторами: OID: 1.2.643.5.1.13.13.99.2.285, Дополнительный OID:???, предпочтительно URI: https://nsi.rosminzdrav.ru/dictionaries/1.2.643.5.1.13.13.99.2.285/passport/1.2 |
| [core-ns-nsi-coverage-document](NamingSystem-core-ns-nsi-coverage-document.md) | Справочник НСИ Минздрава <Типы документов оснований>, может быть известен под следующими идентификаторами: OID: 1.2.643.5.1.13.13.99.2.724, предпочтительно URI: http://fhir.ru/core/CodeSystem/core-cs-nsi-coverage-document |
| [core-ns-nsi-identity-document](NamingSystem-core-ns-nsi-identity-document.md) | Справочник НСИ Минздрава <Документы, удостоверяющие личность>, может быть известен под следующими идентификаторами: OID: 1.2.643.5.1.13.13.99.2.48, Дополнительный OID: 1.2.643.5.1.13.13.11.1011, 1.2.643.5.1.13.2.1.1.736, предпочтительно URI: http://fhir.ru/core/CodeSystem/core-cs-nsi-identity-document |
| [core-ns-nsi-medical-workers-positions](NamingSystem-core-ns-nsi-medical-workers-positions.md) | Справочник НСИ Минздрава <Должности медицинских и фармацевтических работников>, может быть известен под следующими идентификаторами: OID: 1.2.643.5.1.13.13.11.1002, Дополнительный OID:???, предпочтительно URI: https://nsi.rosminzdrav.ru/dictionaries/1.2.643.5.1.13.13.11.1002/passport/9.5 |
| [core-ns-nsi-register-of-medical-organizations](NamingSystem-core-ns-nsi-register-of-medical-organizations.md) | Справочник НСИ Минздрава <Реестр медицинских организаций Российской Федерации>, может быть известен под следующими идентификаторами: OID: 1.2.643.5.1.13.13.11.1461, Дополнительный OID:???, предпочтительно URI: http://fhir.ru/core/CodeSystem/core-ns-nsi-register_of_ medical_organizations |
| [core-ns-nsi-sources-of-payment](NamingSystem-core-ns-nsi-sources-of-payment.md) | Справочник НСИ Минздрава <Источники оплаты медицинской помощи>, может быть известен под следующими идентификаторами: OID: 1.2.643.5.1.13.13.11.1039, предпочтительно URI: http://fhir.ru/core/CodeSystem/core-cs-nsi-sources-of-payment |
| [core-ns-nsi-types-medical-documentation](NamingSystem-core-ns-nsi-types-medical-documentation.md) | Справочник НСИ Минздрава <Виды медицинской документации>, может быть известен под следующими идентификаторами: OID: 1.2.643.5.1.13.13.11.1522, Дополнительный OID:???, предпочтительно URI: https://nsi.rosminzdrav.ru/dictionaries/1.2.643.5.1.13.13.11.1522/passport/7.24 |
| [core-ns-rf-birth-certificate](NamingSystem-core-ns-rf-birth-certificate.md) | Номера государственных свидетельств о рождении формируются государственной системой органов записи актов гражданского состояния (ЗАГС), с внесением в единый реестр записей актов гражданского состояния (ЕГР ЗАГС). Предполагается, что номер уникален, сведений об ограничении срока уникальности номера нет. |
| [core-ns-rf-inn](NamingSystem-core-ns-rf-inn.md) | Государственные идентификационные номера налогоплательщика, формируются государственной федеральной налоговой службой (ФНС России). Уникальный неизменяемый.. Используется на всей территории РФ и не меняется, даже если налогоплательщик меняет место жительства, фамилию и другие паспортные данные. |
| [core-ns-rf-ogrn](NamingSystem-core-ns-rf-ogrn.md) | Основной государственный регистрационный номер юридического лица (индивидуального предпринимателя) (ОГРН) |
| [core-ns-rf-snils](NamingSystem-core-ns-rf-snils.md) | Страховой номер индивидуального лицевого счёта, СНИЛС — уникальный номер индивидуального лицевого счёта застрахованного лица в системе обязательного пенсионного страхования |

### Example: Example Instances 

These are example instances that show what data produced and consumed by systems conforming with this implementation guide might look like.

| |
| :--- |
| [core-coverage-instance-full](Coverage-core-coverage-instance-full.md) |
| [core-observation-instance-full](Observation-core-observation-instance-full.md) |
| [core-organization-instance-full](Organization-core-organization-instance-full.md) |
| [core-patient-instance-full](Patient-core-patient-instance-full.md) |
| [core-patient-payer-instance-full](Patient-core-patient-payer-instance-full.md) |
| [core-practitioner-instance-full](Practitioner-core-practitioner-instance-full.md) |
| [core-practitioner-role-instance-full](PractitionerRole-core-practitioner-role-instance-full.md) |
| [core-related-person-instance-full](RelatedPerson-core-related-person-instance-full.md) |
| [core-related-person-payer-instance-full](RelatedPerson-core-related-person-payer-instance-full.md) |
| [core-servicerequest-instance-full](ServiceRequest-core-servicerequest-instance-full.md) |

