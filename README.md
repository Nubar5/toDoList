# toDoList
Bu skript tapşırıq siyahısına tapşırıqları əlavə etmək, silmək və redaktə etmək funksiyasını təmin edir.

## Funksiyalar

 `addTask()`
- `task-input` identifikatoru ilə giriş sahəsindən tapşırıq daxiletməsini alır.
- input boş deyilsə, yeni tapşırıq elementi yaradır.
- Tapşırığı silmək və redaktə etmək üçün düymələri olan tapşırıqlar siyahısına əlavə edir.
- Tapşırığı əlavə etdikdən sonra input sahəsini təmizləyir.

`deleteTask(button)`
- Sil düyməsi kliklədikdə tapşırıq elementini silir.

 `editTask(button)`
- Redaktə etmək üçün tapşırıq mətnini input sahəsinə çevirir.
- Enter düyməsini sıxdıqda və ya giriş sahəsi diqqəti itirdikdə tapşırıq mətnini yeniləyir.

 `handleEnterKey(event)`
- Daxiletmə sahəsində Enter düyməsini sıxdıqda `addTask()` çağırır.

 İstifadəsi
1. Tapşırığın əlavə edilməsi: Daxiletmə sahəsinə tapşırığı daxil edin və Enter düyməsini basın və ya tapşırığı əlavə etmək üçün düyməni basın.
2. Tapşırığın silinməsi: Tapşırığı silmək üçün zibil qutusunun işarəsinə klikləyin.
3. Tapşırığın redaktə edilməsi: Tapşırığı redaktə etmək üçün redaktə ikonasına klikləyin, Enter düyməsini basın və ya dəyişiklikləri saxlamaq üçün daxiletmə sahəsindən kənara klikləyin.
