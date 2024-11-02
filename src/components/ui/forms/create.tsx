export function FieldName() {
  return (
    <>
      <label htmlFor="name" className="mt-2">
        Имя:
      </label>
      <input
        type="text"
        name="name"
        id="name"
        className="border rounded pl-2 py-2"
        placeholder="Введите имя..."
      />
    </>
  );
}

export function FieldBirthday() {
  return (
    <>
      <label htmlFor="date" className="mt-2">
        Дата рождения:
      </label>
      <input type="date" id="date" className="border rounded pl-2 py-2" />
    </>
  );
}

export function Submit() {
  return (
    <button
      type="submit"
      className="mt-7 p-2 bg-black text-2xl text-white rounded-2xl"
    >
      Oтправить
    </button>
  );
}
