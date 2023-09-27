# база знаний сообщества fhir-ru

[сайт](http://fhir-ru.zendoc.me)

## состав инсталляции

1. Веб приложение на clojure (платформа java)
2. Система контроля версий git
3. FHIR IG Publisher
4. Sushi FSH Compiler + Node.js
5. Jekyll + ruby

## установка 

1. открыть terminal

Mac:

- установить Command Line Tools для xcode (если не установлены)
```
xcode-select --install
```
Во всплывающем окне нажать установить, дождаться окончания установки.

- установить brew

* Скопировать команду установки в терминал

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

* Ввести пароль системного пользователя если потребуется. После установки пакета перезапустить терминал.

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

2. установить и настроить git (если требуется)

Mac:
```bash
brew install git
```
также по желанию вместо команды git терминала можно пользоваться [оф. приложением](https://desktop.github.com/)

* выставить метод слияния веток для git:
```
git config pull.rebase false
```

3. склонировать этот репозиторий
```bash
git clone https://github.com/fhir-ru/ru.core.git
```

4. установить java 8+
проверить установлена ли java можно через Java Control Panel или команду терминала
```bash
java -version
```
рекомендуем использовать сборку [adoptium](https://adoptium.net). также можно Oracle Java, OpenJDK

5. установить clojure cli, перезапустить терминал

Mac:
```bash
brew install clojure/tools/clojure

```

6. установить FHIR IG Publisher Tool

```
cd RuLabIG && ./_updatePublisher.sh
cd RuCoreIG && ./_updatePublisher.sh
```

7. установить node.js 18 версии

для установки на [debian/ubuntu](https://github.com/nodesource/distributions#installation-instructions)

8. установить sushi (компилятор fsh)

```
npm install -g fsh-sushi
```

9. установить ruby

Debian/ubuntu:

```
sudo apt-get install ruby-full build-essential zlib1g-dev
```

10. установить jekyll

```
gem install jekyll bundler

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
