
Profile: LabServiceRequest
Id: lab-service-request
Parent: ServiceRequest
Title: "Запрос услуги"
Description: "Запись запроса на процедуру, диагностику или другую услугу, которая должна быть запланирована, предложена или выполнена"

* ^url = "http://fhir.ru/lab/StructureDefinition/lab-service-request"
* subject 1..1 MS
* subject ^short = "Физическое или юридическое лицо, для которого заказана услуга"
* subject only Reference(CorePatient)