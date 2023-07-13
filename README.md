# база знаний сообщества fhir-ru

[сайт](http://fhir-ru.zendoc.me)

## состав инсталляции

1. Веб приложение клиент-сервер на clojure (платформа java)
2. Система контроля версий git

## установка на mac

1. открыть terminal

2. установить Command Line Tools для xcode (если не установлены)
```
xcode-select --install
```
Во всплывающем окне нажать установить, дождаться окончания установки.

3. установить brew

* Скопировать команду установки в терминал

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

* Ввести пароль системного пользователя если потребуется. После установки пакета может потребоваться перезапуск терминала.

* Проверить brew
```bash
brew help
```

Для Mac с M1 если команда brew не найдена:

* проверить какая оболочка командной строки используется
```bash
echo $0
```
* если zsh - выполнить в терминале:
```
echo 'eval "$(/opt/homebrew/bin/brew shellenv)"' >> ~/.zprofile
```
* если bash - выполнить в терминале
```
echo 'eval "$(/opt/homebrew/bin/brew shellenv)"' >> ~/.bash_profile
```
* перезапустить терминал, проверить что brew работает через
```
brew help
```

4. установить и настроить git (если требуется)
```bash
brew install git
```
также по желанию вместо команды git терминала можно пользоваться [оф. приложением](https://desktop.github.com/)
* выставить метод слияния для git:
```
git config pull.rebase false
```
* выставить имя редактора и email как в аккаунте на github
```
git config user.name "editor name"
git config user.email "editor@zendoc.me"
```
5. склонировать этот репозиторий
```bash
git clone https://github.com/fhir-ru/ru.core.git
```
6. установить java 8+
проверить установлена ли java можно через Java Control Panel или команду терминала
```bash
java -version
```
рекомендуем использовать сборку [adoptium](https://adoptium.net). также можно Oracle Java, OpenJDK

7. установить clojure
```bash
brew install clojure/tools/clojure
```

## запуск

1. перейти в склонированный репозиторий и в терминале вызвать:
```
git pull
clojure -M:run
```

2. перейти на http://localhost:8080

## сайт
изменения в репозитории автоматически разворачиваются на http://fhir-ru.zendoc.me
