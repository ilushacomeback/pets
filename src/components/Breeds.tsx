'use client';

import Image from 'next/image';
import { ChangeEvent, useState } from 'react';

interface Breed {
  id: string;
  name: string;
}

const allBreeds: Breed[] = [
  { id: 'mongrel', name: 'Дворняжка' },
  { id: 'ainu', name: 'Айну' },
  { id: 'airedaleTerrier', name: 'Аирдейл-терьер' },
  { id: 'akitaInu', name: 'Акита-ину' },
  { id: 'alabai', name: 'Алабай' },
  { id: 'alapahaBulldog', name: 'Алапахский бульдог' },
  { id: 'englishBulldog', name: 'Английский бульдог' },
  { id: 'englishCockerSpaniel', name: 'Английский кокер-спаниель' },
  { id: 'englishMastiff', name: 'Английский мастиф' },
  { id: 'englishSetter', name: 'Английский сеттер' },
  { id: 'englishSpringerSpaniel', name: 'Английский спрингер-спаниель' },
  { id: 'americanAkita', name: 'Американская акита' },
  { id: 'americanBulldog', name: 'Американский бульдог' },
  { id: 'americanCockerSpaniel', name: 'Американский кокер-спаниель' },
  {
    id: 'americanStaffordshireTerrier',
    name: 'Американский стаффордширский терьер',
  },
  { id: 'anatolianShepherd', name: 'Анатолийская овчарка' },
  { id: 'appenzeller', name: 'Аппенцеллер' },
  { id: 'argentineDogo', name: 'Аргентинский дог' },
  { id: 'afghanHound', name: 'Афганская борзая' },
  { id: 'bassetHound', name: 'Бассет-хаунд' },
  { id: 'bedlingtonTerrier', name: 'Бедлингтон-терьер' },
  { id: 'whiteSwissShepherd', name: 'Белая швейцарская овчарка' },
  { id: 'belgianShepherd', name: 'Бельгийская овчарка' },
  { id: 'berneseMountainDog', name: 'Бернский зенненхунд' },
  { id: 'beagle', name: 'Бигль' },
  { id: 'bloodhound', name: 'Бладхаунд' },
  { id: 'bobtail', name: 'Бобтейл' },
  { id: 'bolonka', name: 'Болонка' },
  { id: 'bordeauxDog', name: 'Бордоский дог' },
  { id: 'borderCollie', name: 'Бордер-колли' },
  { id: 'borzoi', name: 'Борзая' },
  { id: 'brazilianFila', name: 'Бразильский фила' },
  { id: 'briard', name: 'Бриар' },
  { id: 'brusselsGriffon', name: 'Брюссельский гриффон' },
  { id: 'bulldog', name: 'Бульдог' },
  { id: 'bullmastiff', name: 'Бульмастиф' },
  { id: 'bullTerrier', name: 'Бультерьер' },
  { id: 'weimaraner', name: 'Веймаранер' },
  { id: 'welshCorgiCardigan', name: 'Вельш-корги кардиган' },
  { id: 'welshCorgiPembroke', name: 'Вельш-корги пемброк' },
  { id: 'westHighlandWhiteTerrier', name: 'Вест-хайленд-уайт-терьер' },
  { id: 'havanese', name: 'Гаванский бишон' },
  { id: 'smoothFoxTerrier', name: 'Гладкошерстный фокстерьер' },
  { id: 'gordonSetter', name: 'Гордон-сеттер' },
  { id: 'greyhound', name: 'Грейхаунд' },
  { id: 'dalmatian', name: 'Далматин' },
  { id: 'dandieDinmontTerrier', name: 'Денди-динмонт-терьер' },
  { id: 'deerhound', name: 'Дирхаунд' },
  { id: 'doberman', name: 'Доберман' },
  { id: 'drahthaar', name: 'Дратхаар' },
  { id: 'oldEnglishSheepdog', name: 'Древнеанглийская овчарка' },
  { id: 'westSiberianLaika', name: 'Западносибирская лайка' },
  { id: 'goldenRetriever', name: 'Золотистый ретривер' },
  { id: 'irishWolfhound', name: 'Ирландский волкодав' },
  { id: 'irishSetter', name: 'Ирландский сеттер' },
  { id: 'irishTerrier', name: 'Ирландский терьер' },
  { id: 'spanishGalgo', name: 'Испанский гальго' },
  { id: 'yorkshireTerrier', name: 'Йоркширский терьер' },
  { id: 'cavalierKingCharlesSpaniel', name: 'Кавалер-кинг-чарльз-спаниель' },
  { id: 'caneCorso', name: 'Кане-корсо' },
  { id: 'kerryBlueTerrier', name: 'Керри-блю-терьер' },
  { id: 'kingCharlesSpaniel', name: 'Кинг-чарльз-спаниель' },
  { id: 'chineseCrestedDog', name: 'Китайская хохлатая' },
  { id: 'cockapoo', name: 'Кокапу' },
  { id: 'collie', name: 'Колли' },
  { id: 'komondor', name: 'Комондор' },
  { id: 'xoloitzcuintli', name: 'Ксолоитцкуинтли' },
  { id: 'kuvasz', name: 'Кувас' },
  { id: 'labradorRetriever', name: 'Лабрадор ретривер' },
  { id: 'laika', name: 'Лайка' },
  { id: 'italianGreyhound', name: 'Левретка' },
  { id: 'leonberger', name: 'Леонбергер' },
  { id: 'lhasaApso', name: 'Лхаса апсо' },
  { id: 'maltese', name: 'Мальтийская болонка' },
  { id: 'mastiff', name: 'Мастиф' },
  { id: 'miniatureSchnauzer', name: 'Миттельшнауцер' },
  { id: 'pug', name: 'Мопс' },
  { id: 'moscowWatchdog', name: 'Московская сторожевая' },
  { id: 'germanShepherd', name: 'Немецкая овчарка' },
  { id: 'greatDane', name: 'Немецкий дог' },
  { id: 'germanSpitz', name: 'Немецкий шпиц' },
  { id: 'newfoundland', name: 'Ньюфаундленд' },
  { id: 'norwegianBuhund', name: 'Норвежский бухунд' },
  { id: 'norwegianLundehund', name: 'Норвежский лундехунд' },
  { id: 'norwegianElkhound', name: 'Норвежский элкхаунд' },
  { id: 'norfolkTerrier', name: 'Норфолк-терьер' },
  { id: 'norwichTerrier', name: 'Норвич-терьер' },
  { id: 'kangal', name: 'Овчарка кангал' },
  { id: 'otterhound', name: 'Оттерхаунд' },
  { id: 'papillon', name: 'Папильон' },
  { id: 'pekingese', name: 'Пекинес' },
  { id: 'presaCanario', name: 'Перро де преса канарио' },
  { id: 'peruvianIncaOrchid', name: 'Перуанская голая собака' },
  { id: 'pyreneanMountainDog', name: 'Пиренейская горная собака' },
  { id: 'pitbullTerrier', name: 'Питбультерьер' },
  { id: 'pointer', name: 'Пойнтер' },
  { id: 'pomeranian', name: 'Померанский шпиц' },
  { id: 'pragueRatter', name: 'Пражский крысарик' },
  { id: 'poodle', name: 'Пудель' },
  { id: 'puli', name: 'Пули' },
  { id: 'rottweiler', name: 'Ротвейлер' },
  { id: 'russianGreyhound', name: 'Русская борзая' },
  { id: 'russianSpaniel', name: 'Русский спаниель' },
  { id: 'russianToy', name: 'Русский той' },
  { id: 'saluki', name: 'Салюки' },
  { id: 'samoyed', name: 'Самоед' },
  { id: 'saintBernard', name: 'Сенбернар' },
  { id: 'siberianHusky', name: 'Сибирский хаски' },
  { id: 'scottishTerrier', name: 'Скотч-терьер' },
  { id: 'slovakCuvac', name: 'Словацкий чувач' },
  { id: 'staffordshireBullTerrier', name: 'Стаффордширский бультерьер' },
  { id: 'tibetanMastiff', name: 'Тибетский мастиф' },
  { id: 'tibetanTerrier', name: 'Тибетский терьер' },
  { id: 'toyTerrier', name: 'Той-терьер' },
  { id: 'toyPoodle', name: 'Той-пудель' },
  { id: 'whippet', name: 'Уиппет' },
  { id: 'pharaohHound', name: 'Фараонова собака' },
  { id: 'fieldSpaniel', name: 'Филд-спаниель' },
  { id: 'finnishSpitz', name: 'Финский шпиц' },
  { id: 'bouvierDesFlandres', name: 'Фландрский бувье' },
  { id: 'foxTerrier', name: 'Фокстерьер' },
  { id: 'frenchBulldog', name: 'Французский бульдог' },
  { id: 'hovawart', name: 'Ховаварт' },
  { id: 'chowChow', name: 'Чау-чау' },
  { id: 'czechoslovakianWolfdog', name: 'Чехословацкая волчья собака' },
  { id: 'sharPei', name: 'Шарпей' },
  { id: 'shetlandSheepdog', name: 'Шелти' },
  { id: 'shihTzu', name: 'Ши-тцу' },
  { id: 'schipperke', name: 'Шипперке' },
  { id: 'schnauzer', name: 'Шнауцер' },
  { id: 'jagdterrier', name: 'Ягдтерьер' },
  { id: 'japaneseChin', name: 'Японский хин' },
  { id: 'japaneseSpitz', name: 'Японский шпиц' },
];

function filterBreeds(name: string) {
  if (!name) return [];
  const regex = new RegExp('' + name + '', 'gi');
  const currentBreeds = allBreeds.filter((breed) => regex.test(breed.name));
  return currentBreeds;
}

export function Breeds() {
  const [checkedBreeds, setCheckedBreeds] = useState<Record<string, string>>(
    {}
  );

  const [findBreed, setFindBreed] = useState<string>('');

  const [breeds, setBreeds] = useState<Breed[]>([]);

  const removeCheck = (breedID: string) => {
    setCheckedBreeds((prev) => {
      const { [breedID]: check, ...rest } = prev;
      return { ...rest };
    });
  };

  const handleChecked = (e: ChangeEvent<HTMLInputElement>) => {
    const breedID = e.target.id as string;
    const nameBreed = e.target.value;
    if (e.target.checked) {
      setCheckedBreeds((prev) => ({ ...prev, [breedID]: nameBreed }));
    } else {
      removeCheck(breedID);
    }
  };

  const handleFindBreed = (e: ChangeEvent<HTMLInputElement>) => {
    setFindBreed(e.target.value);
    const currentBreeds = filterBreeds(e.target.value);
    setBreeds(currentBreeds);
  };

  return (
    <>
      <label htmlFor="breed" className="mt-2">
        Выберите породу:
      </label>
      {Object.keys(checkedBreeds).length > 0 && (
        <div className="flex flex-wrap">
          {Object.keys(checkedBreeds).map((id) => (
            <div key={id} className="flex items-center align-middle mr-2">
              <span className="text-wrap">{checkedBreeds[id]}</span>
              <button className="" onClick={() => removeCheck(id)}>
                <Image src="/exit.svg" alt="exit" width={36} height={36} />
              </button>
            </div>
          ))}
        </div>
      )}
      <input
        type="text"
        id="breed"
        name="breed"
        placeholder="Начните вводить породу..."
        className="border rounded pl-2 py-2 mb-2"
        spellCheck={false}
        value={findBreed}
        onChange={handleFindBreed}
      />

      {breeds.map((breed) => (
        <div key={breed.id}>
          <input
            type="checkbox"
            id={breed.id}
            value={breed.name}
            name="breed"
            onChange={handleChecked}
            checked={!!checkedBreeds[breed.id]}
          />
          <label htmlFor={breed.id} className="ml-2">
            {breed.name}
          </label>
        </div>
      ))}
    </>
  );
}
