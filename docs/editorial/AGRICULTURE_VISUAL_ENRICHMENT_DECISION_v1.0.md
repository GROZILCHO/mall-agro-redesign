# Agriculture Visual Enrichment Decision v1.0

> PM UPDATE:
> The first implementation attempt based on this decision was rejected after visual QA.
> Do not implement the diagram-like Project Information panel or separate Beyond the Field progression strip.
> Revised direction: use a future media/image placeholder for Project Information and integrate category icons directly inside the Beyond the Field destination cards.

## 1. Verdict

**Visual enrichment needed now.**

Не защото страницата е слаба, а защото вече е достигнала етап, в който следващото подобрение не е UX, а **визуална комуникация**.

След "Typical Operational Environments" страницата започва да разчита почти изцяло на текстови структури:

* editorial split;
* matrix;
* numbered sequence;
* information matrix;
* destination cards.

Това е логически правилно, но вече не изгражда достатъчно силен визуален разказ.

---

# 2. Decision — Project Information

**Не препоръчвам нова фотография.**

Това е най-важното решение.

Причината:

До този момент всички снимки показват реални operational environments.

Project Information вече не говори за среда.

Говори за:

* planning;
* project inputs;
* operational data;
* preparation.

Фотографията няма естествено да комуникира тези идеи.

Ще бъде декоративна.

---

## Recommendation

Използвай **diagram-like project briefing panel**.

Не infographic.

Не flowchart.

Не marketing illustration.

По-скоро нещо между:

engineering worksheet

*

project brief canvas

*

planning framework.

---

# 3. What should it communicate?

Използвай вече одобреното съдържание.

Визуалният панел трябва да покаже връзките между:

Operational Activity

↓

Material Profile

↓

Existing Operation

↓

Future Development

↓

Equipment Discussion

Тоест:

не нова информация,

а визуална организация на вече наличната.

Така секцията започва да изглежда като:

"тук се подготвя проектът"

вместо

"тук има още четири карти".

Това е огромна разлика.

---

# 4. If image were used instead

Ако все пак някога се използва снимка,

тя трябва да бъде изключително специфична.

Например:

* инженер и земеделски оператор над проектна документация;
* farm planning table;
* printed layouts;
* tablet + field maps;
* operational planning meeting.

Без:

* handshake;
* posing;
* generic business people;
* stock office meeting;
* tractor dealership.

Но това остава втори избор.

---

# 5. Decision — Beyond the Field

Тук също **не бих добавял нова снимка.**

Проблемът не е липсата на изображение.

Проблемът е липсата на усещане за:

production journey.

В момента изглежда като:

Related Links.

Трябва да изглежда като:

Next Operational Stage.

---

## Recommendation

Използвай **визуален connector**, а не нова фотография.

Например:

Agriculture

↓

Grain Processing

↓

Food Industry

не като flowchart,

а като много дискретен production progression indicator.

Това може да стои:

над картите

или

между heading-а и картите.

Така същите две destination cards придобиват контекст.

---

# 6. Existing category icons?

Да.

Това според мен е правилното място.

Използвай вече съществуващите category icons като:

визуални anchors,

не като декоративни елементи.

Например:

tractor icon

↓

grain icon

↓

food icon

Това подсилва:

* site architecture;
* category relationship;
* production progression.

Без да се добавя ново съдържание.

---

# 7. Fix now or defer?

**Fix now.**

Причината:

Agriculture вече е Golden Master кандидат.

Точно сега трябва да бъде определен правилният visual language.

После:

Grain Processing

Food Industry

ще наследят същия модел.

Ако се отложи,

рискуваме да изградим още две категории върху по-слабия вариант.

---

# 8. Shared component vs Agriculture-specific

## Shared

* diagram-like project briefing panel pattern;
* production progression connector;
* category icon connector;
* destination-card enhancement logic.

Това трябва да стане част от бъдещия category template.

---

## Agriculture-specific

Само съдържанието вътре.

Самият визуален модел трябва да бъде споделен.

---

# 9. One consolidated implementation recommendation

**"Category Visual Enrichment Pass"**

Една контролирана задача, която:

* добавя diagram-style project briefing panel към Project Information;
* превръща Beyond the Field от "related links" в "production progression";
* използва съществуващите category icons като визуални свързващи елементи;
* не добавя нов copy;
* не добавя нови claims;
* не въвежда нови design tokens;
* не променя структурата на страницата;
* не изисква нова фотография.

Това е една концептуално завършена задача с висок ефект и нисък риск.

---

# 10. Stop conditions for Codex

Codex трябва да спре, ако:

* се наложи промяна на одобрения текст;
* се наложи нова дизайн система;
* са необходими нови цветове, шрифтове или компоненти извън съществуващите;
* визуалният панел започне да въвежда нова информация вместо да организира съществуващата;
* се изисква нов фотографски asset, за да бъде задачата завършена;
* промяната засегне Hero, CTA, навигацията или споделената архитектура извън описания обхват.

### Финално заключение

Това е първата задача, която бих определил като **визуално обогатяване**, а не като UX корекция. Страницата вече не се нуждае от повече текст или различен layout. Нуждае се от една допълнителна визуална "нишка", която да свърже оперативното мислене с подготовката на проекта и да превърне последната третина на страницата в по-запомняща се enterprise история.
