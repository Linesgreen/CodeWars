-- Возвращаем данные в таблицу НО преобразуем race в нижний регистр


SELECT id, name, birthday, LOWER(race) AS race
FROM  demographics

