/* JPD123 – dữ liệu Bài 4–7 (đồng bộ từ JPD123_Bai4-7_Tong_hop.md). Nạp TRƯỚC script xử lý chính. */
const T={A:["Động từ","Verbs"],B:["Tính từ","Adjectives"],C:["Ăn uống","Food & drink"],D:["Đồ vật","Objects"],E:["Địa điểm & phương tiện","Places & transport"],F:["Thời gian","Time"],G:["Con người","People"],H:["Vị trí & phương hướng","Position & direction"],I:["Từ nối & giao tiếp","Connectors & phrases"],J:["Khác","Other"]};

/* Kanji: kana=chữ Hán|Hán Việt (các chữ Hán nằm trong Bài 4–7) */
const K=`きた=北|Bắc
にし=西|Tây
ひがし=東|Đông
みなみ=南|Nam
まんなか=真ん中|Chân trung
くるま=車|Xa
しんかんせん=新幹線|Tân cán tuyến
でんしゃ=電車|Điện xa
ひこうき=飛行機|Phi hành cơ
まち=町|Đinh
えき=駅|Dịch
おんせん=温泉|Ôn tuyền
かわ=川|Xuyên
やま=山|Sơn
きょうかい=教会|Giáo hội
おしろ=城|Thành
じんじゃ=神社|Thần xã
おてら=お寺|Tự
ところ=所|Sở
ひと=人|Nhân
みどり=緑|Lục
あたらしい=新しい|Tân
ふるい=古い|Cổ
わるい=悪い|Ác
おおい=多い|Đa
すくない=少ない|Thiểu
おおきい=大きい|Đại
ちいさい=小さい|Tiểu
たかい=高い|Cao
ひくい=低い|Đê
しずか=静か|Tĩnh
ゆうめい=有名|Hữu danh
あつい=暑い / 熱い|Thử/Nhiệt
さむい=寒い|Hàn
きせつ=季節|Quý tiết
りょうり=料理|Liệu lý
あめ=雨|Vũ
ゆき=雪|Tuyết
ひ=日|Nhật
あたたかい=暖かい|Noãn
すずしい=涼しい|Lương
つめたい=冷たい|Lãnh
てんきがいい=天気がいい|Thiên khí
てんきがわるい=天気が悪い|Thiên khí ác
いちねんじゅう=一年中|Nhất niên trung
あまい=甘い|Cam
からい=辛い|Tân
にがい=苦い|Khổ
とうきょう=東京|Đông kinh
し=市|Thị
なまえ=名前|Danh tiền
ぜんじつ=前日|Tiền nhật
ごぜん=午前|Ngọ tiền
くに=国|Quốc
がいこく=外国|Ngoại quốc
おとこのひと=男の人|Nam nhân
おんなのひと=女の人|Nữ nhân
だんじょ=男女|Nam nữ
く=区|Khu
じかん=時間|Thời gian
ふん／ぷん=分|Phân
きのう=昨日|Tạc nhật
おととい=一昨日|Nhất tạc nhật
きょう=今日|Kim nhật
あした=明日|Minh nhật
あさって=明後日|Minh hậu nhật
せんしゅう=先週|Tiên chu
しゅうまつ=週末|Chu mạt
いえ=家|Gia
へや=部屋|Bộ ốc
びじゅつかん=美術館|Mỹ thuật quán
かぞく=家族|Gia tộc
こいびと=恋人|Luyến nhân
ともだち=友達|Hữu đạt
あいます=会います|Hội
つくります=作ります|Tác
かいものします=買い物します|Mãi vật
しょくじします=食事します|Thực sự
せんたくします=洗濯します|Tẩy trạc
そうじします=掃除します|Tảo trừ
ひとりで=一人で|Nhất nhân
けさ=今朝|Kim triêu
せんげつ=先月|Tiên nguyệt
きょねん=去年|Khứ niên
かぜ=風 / 風邪|Phong/Phong tà
てんき=天気|Thiên khí
ばんごはん=晩ご飯|Vãn phạn
ふく=服|Phục
のぼります=登ります|Đăng
はいります=入ります|Nhập
いそがしい=忙しい|Mang
おもしろい=面白い|Diện bạch
きもちがいい=気持ちがいい|Khí trì
やすい=安い|An
たのしい=楽しい|Lạc
むずかしい=難しい|Nan
かんたん=簡単|Giản đơn
たいへん=大変|Đại biến
ひま=暇|Hạ
こんど=今度|Kim độ
こんばん=今晩|Kim vãn
ことし=今年|Kim niên
らいねん=来年|Lai niên
え=絵|Hội
けしき=景色|Cảnh sắc
じてんしゃ=自転車|Tự chuyển xa
しゃしん=写真|Tả chân
とります=撮ります / 取ります|Toát/Thủ
かります=借ります|Tá
ほしい=欲しい|Dục
すき=好き|Hảo
きらい=嫌い|Hiềm
せんせい=先生|Tiên sinh
まいしゅう=毎週|Mỗi chu
まいにち=毎日|Mỗi nhật
まいあさ=毎朝|Mỗi triêu
ごご=午後|Ngọ hậu
あと=後|Hậu
けんがく=見学|Kiến học
みます=見ます|Kiến
しょくじ=食事|Thực sự
たべます=食べます|Thực
のみます=飲みます|Ẩm
いんしょく=飲食|Ẩm thực
かいもの=買い物|Mãi vật
かいます=買います|Mãi
どうぶつ=動物|Động vật
もの=物|Vật
いきます=行きます|Hành
りょこう=旅行|Lữ hành
やすみます=休みます|Hưu
きゅうけい=休憩|Hưu khế
やすみ=休み|Hưu
こんしゅう=今週|Kim chu
らいしゅう=来週|Lai chu
こんげつ=今月|Kim nguyệt
らいげつ=来月|Lai nguyệt
しあい=試合|Thí hợp
ちず=地図|Địa đồ
みずぎ=水着|Thủy trước
やきゅう=野球|Dã cầu
やくそく=約束|Ước thúc
ようじ=用事|Dụng sự
まい=枚|Mai
ざんねん=残念|Tàn niệm
いっしょに=一緒に|Nhất tự
またこんど=また今度|Kim độ
たべもの=食べ物|Thực vật
のみもの=飲み物|Ẩm vật
やきにく=焼き肉|Thiêu nhục
たべほうだい=食べ放題|Thực phóng đề
いざかや=居酒屋|Cư tửu ốc
えいがかん=映画館|Ánh họa quán
ちかてつ=地下鉄|Địa hạ thiết
かしゅ=歌手|Ca thủ
ちかい=近い|Cận
とおい=遠い|Viễn
はやい=早い|Tảo
ひろい=広い|Quảng
ぜんぶ=全部|Toàn bộ
すきやき=すき焼き|Thiêu
おこのみやき=お好み焼き|Hảo thiêu
あそびます=遊びます|Du
いま=今|Kim
らいにち=来日|Lai nhật
きます=来ます|Lai
きこく=帰国|Quy quốc
かえります=帰ります|Quy
かいしゃ=会社|Hội xã
かいしゃいん=会社員|Hội xã viên
しゃかい=社会|Xã hội
しゃいん=社員|Xã viên
しんぶん=新聞|Tân văn
どくしょ=読書|Độc thư
よみます=読みます|Độc
かいわ=会話|Hội thoại
かいさつ=改札|Cải trát
き=木|Mộc
こうばん=交番|Giao phiên
じどうはんばいき=自動販売機|Tự động phán mại cơ
はな=花|Hoa
いぬ=犬|Khuyển
あいだ=間|Gian
うえ=上|Thượng
した=下|Hạ
ちかく=近く|Cận
となり=隣|Lân
なか=中|Trung
そと=外|Ngoại
まえ=前|Tiền
うしろ=後ろ|Hậu
むかえにいきます=迎えに行きます|Nghênh hành
ひだり=左|Tả
みぎ=右|Hữu
いす=椅子|Ỷ tử
でんしレンジ=電子レンジ|Điện tử
れいぞうこ=冷蔵庫|Lãnh tàng khố
さとう=砂糖|Sa đường
しお=塩|Diêm
しょうゆ=醤油|Tương du
おさら=お皿|Mãnh
はし=箸|Trợ
かんじ=漢字|Hán tự
あらいます=洗います|Tẩy
おきます=置きます|Trí
かきます=書きます|Thư
かします=貸します|Thải
ききます=聞きます|Văn
きります=切ります|Thiết
つかいます=使います|Sử
てつだいます=手伝います|Thủ truyền
もっていきます=持って行きます|Trì hành
わかります=分かります|Phân
だします=出します|Xuất
いれます=入れます|Nhập
おしえます=教えます|Giáo
うたをうたいます=歌を歌います|Ca ca
だいどころ=台所|Đài sở
でんわ=電話|Điện thoại
まど=窓|Song
すいます=吸います|Hấp
はなします=話します|Thoại
ひきます=弾きます|Đàn
もちます=持ちます|Trì
あけます=開けます|Khai
しめます=閉めます|Bế
でんわをかけます=電話をかけます|Điện thoại
もってきます=持って来ます|Trì lai
きんかくじ=金閣寺|Kim các tự
げんごがく=言語学|Ngôn ngữ học
いいます=言います|Ngôn
かい=貝|Bối
たなか=田中|Điền trung
たんぼ=田んぼ|Điền
どりょく=努力|Nỗ lực
せんもん=専門|Chuyên môn
にく=肉|Nhục
ぶたにく=豚肉|Đồn nhục
とりにく=鶏肉|Kê nhục
ぎゅうにく=牛肉|Ngưu nhục
りょうきん=料金|Liệu kim
やさい=野菜|Dã thái
じはん=時半|Thời bán
はん=半|Bán
はんぶん=半分|Bán phân
はんがく=半額|Bán ngạch
だいがく=大学|Đại học
おとな=大人|Đại nhân
しょうがく=小学|Tiểu học
しょうがくせい=小学生|Tiểu học sinh
ちから=力|Lực
おねがいします=お願いします|Nguyện
だいじょうぶ=大丈夫|Đại trượng phu`.split('\n').reduce((o,l)=>{const[a,b]=l.split('=');o[a]=b.replace('|',' – ');return o},{});

/* Từ vựng: kana|nghĩa|nhóm|English|bài|ví dụ  (ví dụ có dấu * = ví dụ bổ sung trong file nguồn) */
const D=`きた|Bắc|H|north|4|ほっかいどうは 日本の きたです。
にし|Tây|H|west|4|パースは オーストラリアの にしです。
ひがし|Đông|H|east|4|シドニーは オーストラリアの 東です。
みなみ|Nam|H|south|4|おきなわは 日本の みなみです。
まんなか|Ở giữa / trung tâm|H|middle, centre|4|ながのは 日本の まんなかです。 / ハノイの まんなか
くるま|Xe ô tô|D|car|4|くるまで いきます。
しんかんせん|Tàu siêu tốc Shinkansen|E|bullet train|4|しんかんせんで 1じかんはんです。
でんしゃ|Tàu điện / tàu lửa|E|train|4|でんしゃで 30ぷんです。
ひこうき|Máy bay|E|airplane|4|まいにち、ひこうきで かいしゃへ いきます。
バス|Xe buýt|E|bus|4|バスで 10じかんです。
あるいて|Đi bộ|A|on foot|4|あるいて いきます。
まち|Thị trấn / thành phố|E|town, city|4|*私の まちは にぎやかです。
えき|Nhà ga|E|station|4|うちから えきまで あるいて 10ぷんです。
おんせん|Suối nước nóng|J|hot spring|4|*おんせんが あります。
かわ|Con sông|J|river|4|*かわが あります。
やま|Núi|J|mountain|4|わたしの まちに やまが あります。
きょうかい|Nhà thờ|E|church|4|ハノイに きょうかいが あります。
おしろ|Lâu đài, thành|E|castle|4|*おしろが あります。
じんじゃ|Đền thờ|E|shrine|4|じんじゃは しずかな ところです。
おてら|Chùa|E|temple|4|フエに ふるい おてらが あります。
ビル|Tòa nhà|E|building|4|ホーチミン市に たかい ビルが あります。
ところ|Nơi, chỗ|E|place|4|じんじゃは しずかな ところです。
ひと|Con người|G|person|4|*ひとが おおいです。
みどり|Màu xanh, cây xanh|J|green|4|ハノイは みどりが おおいです。
あたらしい|Mới|B|new|4|このうちは あたらしいです。
ふるい|Cũ|B|old|4|フエに ふるい おてらが あります。
いい|Tốt|B|good, nice|4|*いいです。
わるい|Xấu|B|bad|4|*わるいです。
おおい|Nhiều|B|many, a lot|4|あめが おおいです。
すくない|Ít|B|few, little|4|*ひとが すくないです。
おおきい|To, lớn|B|big|4|このかばんは おおきいです。
ちいさい|Bé, nhỏ|B|small|4|*ちいさい かばんです。
たかい|Cao / đắt|B|tall, expensive|4|ふじさんは たかいです。
ひくい|Thấp|B|low|4|*この山は ひくいです。
きれい|Đẹp, sạch sẽ|B|pretty, clean|4|ランさんは きれいです。
しずか|Yên tĩnh|B|quiet|4|じんじゃは しずかな ところです。
にぎやか|Náo nhiệt, nhộn nhịp|B|lively, bustling|4|ハノイは にぎやかですか。
ゆうめい|Nổi tiếng|B|famous|4|私のまちは ゆうめいです。
しんせつ|Tốt bụng|B|kind|4|*しんせつな 人です。
あつい|Nóng bức (thời tiết và đồ vật)|B|hot|4|ベトナムは ５月、あついです。
さむい|Lạnh, rét (thời tiết)|B|cold (weather)|4|ロシアは 1がつ、さむいです。
きせつ|Mùa|F|season|4|*どの季節がいちばん好きですか。
りょうり|Món ăn|C|cooking, dish|4|すしは ゆうめいな りょうりです。
あめ|Mưa|J|rain|4|日本は 6がつ、あめが おおいです。
ゆき|Tuyết|J|snow|4|ロシアは 1がつ、ゆきが おおいです。
ひ|Ngày / mặt trời|F|day, sun|4|
メロン|Dưa lưới|C|melon|4|
あたたかい|Ấm áp (thời tiết và đồ vật)|B|warm|4|*きょうは あたたかいです。
すずしい|Mát mẻ (thời tiết)|B|cool|4|*あきは すずしいです。
つめたい|Lạnh, mát (đồ vật)|B|cold (to the touch)|4|*つめたい のみものです。
てんきがいい|Thời tiết tốt|B|good weather|4|*きょうは てんきが いいです。
てんきがわるい|Thời tiết xấu|B|bad weather|4|*きのうは てんきが わるかったです。
いちねんじゅう|Suốt 1 năm|F|all year round|4|N は 一年中、Aです。
あまい|Ngọt|B|sweet|4|*このケーキは あまいです。
からい|Cay|B|spicy|4|*からい りょうりです。
にがい|Đắng|B|bitter|4|*この くすりは にがいです。
すっぱい|Chua|B|sour|4|*すっぱい メロンです。
なっとう|Natto (đậu nành lên men)|C|natto (fermented soybeans)|4|なっとうは あまり おいしくないです。
とうきょう|Thành phố Tokyo|E|Tokyo|4|
し|Thành phố (~市)|E|city (~shi)|4|
なまえ|Tên|G|name|4|
ぜんじつ|Ngày hôm trước|F|the previous day|4|
ごぜん|Buổi sáng (AM)|F|a.m.|4|
くに|Đất nước|J|country|4|
がいこく|Nước ngoài|J|foreign country|4|
おとこのひと|Người đàn ông|G|man|4|
おんなのひと|Người phụ nữ|G|woman|4|
だんじょ|Nam và nữ|G|men and women|4|
く|Quận|E|ward, district|4|
じかん|Tiếng, thời gian|F|hour(s), time|4|
ふん／ぷん|Phút|F|minute(s)|4|
あまり|Không ... lắm|I|not very|4|
とても|Rất|I|very|4|
そして|Và, sau đó|I|and, then|4|
ね|Nhỉ|I|right?|4|
よ|Nhé, đấy (báo thông tin mới, nhấn mạnh)|I|(sentence-final) new info, emphasis|4|
どんな|Như thế nào|I|what kind of|4|
どこ|Ở đâu|I|where|4|
どのくらい|Khoảng bao nhiêu, bao lâu|I|how much, how long|4|
おいしい|Ngon|B|delicious|4|
きのう|Ngày hôm qua|F|yesterday|5|昨日の晩、どこへ 行きましたか。
おととい|Ngày hôm kia|F|day before yesterday|5|おとといの昼、私は 先生と ご飯を 食べました。
きょう|Hôm nay|F|today|5|
あした|Ngày mai|F|tomorrow|5|明日 私は 銀行へ 行きません。
あさって|Ngày kia|F|day after tomorrow|5|あさっての昼、私は 先生と ご飯を 食べます。
せんしゅう|Tuần trước|F|last week|5|せんしゅうの 土曜日、ランさんは 田舎へ 帰りました。
しゅうまつ|Cuối tuần|F|weekend|5|*週末、何を しますか。
いえ|Ngôi nhà|D|house|5|*いえで 映画を 見ます。
へや|Căn phòng|D|room|5|*へやを そうじします。
デパート|Trung tâm thương mại|E|department store|5|*デパートで 買い物します。
びじゅつかん|Bảo tàng mỹ thuật|E|art museum|5|*びじゅつかんへ 行きます。
ゲーム|Game|J|game|5|子どもと ゲームを して います。
かぞく|Gia đình|G|family|5|今晩、家族と レストランで 晩ご飯を 食べます。
こいびと|Người yêu|G|boyfriend, girlfriend|5|きのう、恋人と 映画を 見ました。
ともだち|Bạn bè|G|friend|5|きのう、友だちと 遊びました。
ルームメイト|Bạn cùng phòng|G|roommate|5|*ルームメイトと 食事します。
どこか|Nơi nào đó|I|somewhere|5|昨日の晩、どこか（へ）行きましたか。
あいます|Gặp gỡ|A|meet|5|*友だちに 会います。
つくります|Làm, chế tạo|A|cook, make|5|*料理を 作ります。
かいものします|Mua sắm|A|go shopping|5|*デパートで 買い物します。
しょくじします|Dùng bữa, ăn uống|A|have a meal|5|きのう、恋人と 映画を 見ました。それから、食事しました。
せんたくします|Giặt giũ|A|do laundry|5|*週末、せんたくします。
そうじします|Hút bụi, lau dọn nhà cửa|A|clean|5|母は へやを そうじして います。
それから|Sau đó|I|and then|5|きのう、サッカーを しました。それから、シャワーを 浴びました。
ひとりで|Một mình|I|alone|5|*ひとりで 映画を 見ます。
けさ|Sáng nay|F|this morning|5|今朝、なにか（を）食べましたか。
せんげつ|Tháng trước|F|last month|5|今は 暇ではありませんが、先月は たいへん 暇でした。
きょねん|Năm ngoái|F|last year|5|*去年、日本へ 行きました。
かぜ|Gió, cảm cúm|J|wind; a cold (illness)|5|ランさんは かぜを ひきましたから、きょう 休みます。
てんき|Thời tiết|J|weather|5|*きょうの てんきは いいです。
ばんごはん|Bữa tối|C|dinner|5|私は レストランで 晩ご飯を 食べます。
ふく|Quần áo|D|clothes|5|*新しい 服を 買います。
のぼります|Leo, trèo|A|climb|5|*山に 登ります。
はいります|Vào, bước vào|A|enter|5|一緒に あそこの レストランに 入りませんか。
いそがしい|Bận rộn|B|busy|5|いそがしいですから、どこも 行きません。
おもしろい|Thú vị|B|interesting|5|とても おもしろかったです。
きもちがいい|Cảm thấy sảng khoái|B|feel good|5|*てんきが いいですから、きもちが いいです。
やすい|Rẻ|B|cheap, easy|5|ここの ビールが 安いですから、毎晩 飲みます。
たのしい|Vui vẻ|B|fun, enjoyable|5|先週の 旅行は とても 楽しかったです。
むずかしい|Khó|B|difficult|5|*日本語は むずかしいです。
かんたん|Dễ, đơn giản|B|easy|5|私は 簡単な人が きらいです。
たいへん|Vất vả|B|hard, tough|5|先月は たいへん 暇でした。
ひま|Rảnh rỗi|B|free (time)|5|今は 暇ではありません。
どうして|Tại sao|I|why|5|どうして ねむいですか。
こんど|Lần tới|F|next time|5|*今度、一緒に 行きましょう。
こんばん|Tối nay|F|tonight|5|今晩 恋人と Vincomへ 映画を 見に 行きます。
ことし|Năm nay|F|this year|5|*今年、日本へ 行きます。
らいねん|Năm tới|F|next year|5|来年 国へ けっこんしに かえります。
え|Tranh vẽ|D|picture|5|*絵を 見に 行きます。
アニメ|Hoạt hình|J|anime|5|*アニメを 見ます。
けしき|Phong cảnh|J|scenery|5|*景色が きれいです。
じてんしゃ|Xe đạp|D|bicycle|5|*自転車で 行きます。
しゃしん|Ảnh|D|photo|5|*写真を とります。
とります|Chụp (ảnh); cầm, lấy|A|take (a photo); take, pick up|5|*しゃしんを とります。 / お皿を 取ってください。
かります|Vay, mượn|A|borrow, rent|5|*ともだちに 本を かります。
ほしい|Muốn có|B|want|5|私は 新しい 家が ほしいです。
すき|Thích|B|like|5|私は 日本料理が 好きです。
きらい|Ghét|B|dislike|5|私は キムさんの 新しいシャツが とても きらいです。
せんせい|Thầy, cô|G|teacher|5|
まいしゅう|Mỗi tuần|F|every week|5|
まいにち|Mỗi ngày|F|every day|5|
まいあさ|Mỗi sáng|F|every morning|5|
ごご|Buổi chiều (PM)|F|p.m.|5|
あと|Sau, sau đó|F|after, later|5|
けんがく|Tham quan học tập|J|study visit|5|
みます|Xem, nhìn, ngắm|A|look, watch|5|
しょくじ|Bữa ăn|C|meal|5|
たべます|Ăn|A|eat|5|
のみます|Uống|A|drink|5|
いんしょく|Ăn uống|C|eating and drinking|5|
かいもの|Mua sắm|J|shopping|5|
かいます|Mua|A|buy|5|
どうぶつ|Động vật|J|animal|5|
もの|Đồ vật, vật|J|thing, object|5|
いきます|Đi|A|go|5|
りょこう|Du lịch|J|travel, trip|5|
やすみます|Nghỉ|A|rest, take a day off|5|
きゅうけい|Nghỉ giải lao|J|break, rest|5|
やすみ|Nghỉ ngơi|F|rest, day off|5|
こんしゅう|Tuần này|F|this week|6|
らいしゅう|Tuần tới|F|next week|6|
こんげつ|Tháng này|F|this month|6|
らいげつ|Tháng sau|F|next month|6|
カラオケ|Karaoke|J|karaoke|6|土曜日、一緒にカラオケに行きませんか。
コンサート|Buổi hòa nhạc|J|concert|6|私はコンサートのチケットを買いました。
しあい|Trận đấu|J|match|6|*試合を見ます。
セール|Sale|J|sale|6|*セールに行きます。
チケット|Vé|D|ticket|6|チケットを2枚買いました。
ちず|Bản đồ|D|map|6|*地図を見ます。
ドライブ|Lái xe (đi chơi bằng ô tô)|J|drive|6|*一緒にドライブしませんか。
みずぎ|Đồ bơi|D|swimsuit|6|*水着を買います。
やきゅう|Bóng chày|J|baseball|6|*野球をします。
やくそく|Cuộc hẹn, lời hứa|I|promise, appointment|6|*明日は約束があります。
ようじ|Việc bận / việc riêng|I|errand, business|6|*明日は用事があります。
まい|~ Tấm / tờ|I|sheets (counter)|6|切手を10枚と はがきを3枚買います。
あります|Có|A|there is (thing); to be at|6|明日、会社で会議があります。
ざんねん|Tiếc nuối|B|too bad, regrettable|6|*残念ですね。
いっしょに|Cùng với|I|together|6|いっしょにべんきょうしませんか。
いいですね|Hay đấy, được đấy|I|sounds good, nice|6|A：いっしょにべんきょうしませんか。B：ええ、いいですね。
すみません|Xin lỗi|I|excuse me, sorry|6|すみません、ちょっと…。
またこんど|Hẹn lần sau!|I|see you next time|6|*すみません、また今度。
たべもの|Đồ ăn|C|food|6|*食べ物は何が好きですか。
のみもの|Đồ uống|C|drink|6|*飲み物を買います。
やきにく|Thịt nướng|C|grilled meat|6|*焼き肉を食べます。
ラーメン|Mỳ Nhật|C|ramen|6|*ラーメンを食べます。
たべほうだい|Ăn buffet|C|all-you-can-eat|6|*食べ放題に行きます。
コース|Suất ăn / Khóa học|C|set course|6|*コースを2つお願いします。
いざかや|Quán rượu|E|izakaya|6|*居酒屋に行きます。
えいがかん|Rạp chiếu phim|E|cinema|6|*映画館で映画を見ます。
ちかてつ|Tàu điện ngầm|E|subway|6|*地下鉄で行きます。
かしゅ|Ca sỹ|G|singer|6|*歌手のコンサートに行きます。
コメディー|Hài kịch|J|comedy|6|*コメディーを見ます。
ジャズ|Nhạc jazz|J|jazz|6|*ジャズを聞きます。
ツアー|Tour du lịch|J|tour|6|*ツアーに行きます。
どちら|Bên nào, phương nào|I|which one (of two)|6|どちらも すきです。
どちらも|Bên nào cũng|I|both|6|どちらも すきです。
ちかい|Gần|B|near|6|*駅は近いです。
とおい|Xa|B|far|6|*会社は遠いです。
はやい|Sớm, nhanh|B|early, fast|6|*朝は早いです。
ひろい|Rộng|B|spacious|6|*この部屋は広いです。
いちばん|Nhất|I|most|6|スポーツでサッカーがいちばんすきです。
ぜんぶ|Toàn bộ|I|all, everything|6|*全部食べました。
そうですねえ|Câu nói ngập ngừng khi suy nghĩ để trả lời câu hỏi|I|let me see... (hesitating)|6|
すきやき|Món nhúng có thịt bò và rau|C|sukiyaki|6|*すき焼きを食べます。
おこのみやき|Món bánh xèo Nhật|C|okonomiyaki|6|*お好み焼きを作ります。
あそびます|Chơi|A|play, hang out|6|*公園で遊びます。
ぜひ|Nhất định|I|by all means|6|*ぜひ行きましょう。
まだ|Vẫn chưa|I|not yet, still|6|いいえ、まだです。
もう|Đã, rồi|I|already|6|はい、（もう）飲みました。
そうしましょう|Làm như thế đi!|I|let's do that|6|日本料理はどうですか。いいです。そうしましょう。
わかりました|Tôi đã hiểu rồi|I|I understand|6|
いま|Bây giờ|F|now|6|
らいにち|Đến Nhật|J|coming to Japan|6|
きます|Đến|A|come|6|
きこく|Về nước|J|returning home|6|
かえります|Về|A|return, go home|6|
かいしゃ|Công ty|E|company|6|
かいしゃいん|Nhân viên công ty|G|company employee|6|
しゃかい|Xã hội|J|society|6|
しゃいん|Nhân viên|G|staff member|6|
しんぶん|Tờ báo|D|newspaper|6|
どくしょ|Đọc sách|J|reading|6|
よみます|Đọc|A|read|6|
かいわ|Hội thoại|J|conversation|6|
ちょっと|Một chút|I|a little|6|
すこし|Một chút|I|a little|6|
ずっと|Hơn hẳn, rất nhiều|I|far more, much|6|
かいさつ|Cổng soát vé|E|ticket gate|7|*改札の 前に 人が います。
き|Cây / gỗ|J|tree|7|*木の 下に 犬が います。
こうばん|Đồn cảnh sát|E|police box|7|*交番は 駅の 近くに あります。
じどうはんばいき|Máy bán hàng tự động|D|vending machine|7|*自動販売機は 駅の 前に あります。
ポスト|Hộp thư, thùng thư|D|mailbox|7|*ポストは 銀行の 隣に あります。
はな|Hoa|J|flower|7|*花が あります。
いぬ|Con chó|J|dog|7|*犬が います。
あいだ|Giữa / ở giữa|H|between|7|*銀行と 郵便局の 間に あります。
うえ|Trên / bên trên|H|above, on|7|本は 机の 上に あります。
した|Dưới / bên dưới|H|below, under|7|*机の 下に あります。
ちかく|Gần / ở vị trí gần|H|nearby|7|*駅の 近くに あります。
となり|Bên cạnh, sát cạnh|H|next to|7|*銀行の 隣に あります。
なか|Trong / bên trong|H|inside|7|かばんの 中に 何が ありますか。
そと|Ngoài / bên ngoài|H|outside|7|*家の 外に います。
まえ|Trước / phía trước|H|front, before|7|*駅の 前に あります。
うしろ|Sau / phía sau / đằng sau|H|behind|7|ぼうしは いすの 後ろに あります。
むかえにいきます|Đi đón|A|go to pick up|7|むかえに 行きましょうか。
います|Có (chỉ sự tồn tại của con người, động vật)|A|there is (person/animal); to be at|7|事務所に 田中さんが います。
もしもし|Alo (khi gọi điện thoại)|I|hello (phone)|7|もしもし、いま ともだちに でんわして います。
そば|Bên cạnh (xuất hiện trong bảng từ chỉ vị trí)|H|beside, near|7|
ひだり|Trái|H|left|7|
みぎ|Phải|H|right|7|
いす|Cái ghế|D|chair|7|ぼうしは いすの 後ろに あります。
テーブル|Cái bàn|D|table|7|
でんしレンジ|Lò vi sóng|D|microwave|7|*電子レンジを 使います。
れいぞうこ|Tủ lạnh|D|refrigerator|7|*冷蔵庫に 入れます。
さとう|Đường|C|sugar|7|*砂糖を 取ってください。
しお|Muối|C|salt|7|塩を 取ってください。
しょうゆ|Xì dầu, nước tương|C|soy sauce|7|*しょうゆを 取ってください。
コップ|Cái cốc (không có tay cầm)|D|cup|7|*コップを 洗います。
おさら|Đĩa, cái đĩa|D|plate|7|お皿を 取ってください。
スプーン|Cái thìa, cái muỗng|D|spoon|7|*スプーンを 使います。
ナイフ|Con dao|D|knife|7|*ナイフで 切ります。
フォーク|Cái dĩa, cái nĩa|D|fork|7|*フォークを 使います。
はし|Đũa|D|chopsticks|7|*箸を 使います。
かんじ|Hán tự, chữ Hán|J|kanji|7|あなたは 漢字が 分かりますか。
どれ|Cái nào?|I|which one|7|どれですか。
どの|Cái N nào?|I|which ~ (どのN)|7|どの皿ですか。
あらいます|Giặt, rửa, tắm|A|wash|7|*皿を 洗います。
おきます|Đặt, để|A|put, place|7|*机の 上に 置きます。
かきます|Viết|A|write|7|なまえを かいて ください。
かします|Cho mượn|A|lend|7|かさを 貸しましょうか。
ききます|Nghe / hỏi|A|listen, ask|7|このCDを きいて ください。
きります|Cắt, gọt|A|cut|7|*ナイフで 切ります。
つかいます|Dùng, sử dụng|A|use|7|パソコンの つかいかたを おしえて ください。
てつだいます|Giúp đỡ|A|help|7|てつだいましょうか。
もっていきます|Mang đi|A|take (with you)|7|*かさを 持って 行きます。
わかります|Hiểu, biết|A|understand|7|私は 英語が 分かります。
だします|Nộp / lấy ra|A|take out|7|*レポートを 出します。
いれます|Cho vào, bỏ vào|A|put in|7|*冷蔵庫に 入れます。
おしえます|Dạy, chỉ bảo|A|teach, tell|7|パソコンの つかいかたを おしえて ください。
たくさん|Nhiều (N)|I|a lot|7|*たくさん 食べました。
すみませんが|Xin lỗi, ~|I|excuse me, but ~|7|すみません、にもつを もちましょうか。
いいですよ|Được đấy|I|sure, that is fine|7|*ええ、いいですよ。
うたをうたいます|Ca, hát|A|sing (a song)|7|*カラオケで 歌を 歌います。
ギター|Đàn ghi ta|D|guitar|7|*ギターを ひきます。
だいどころ|Nhà bếp|E|kitchen|7|*台所で 料理を つくります。
タバコ|Thuốc lá|D|cigarette|7|*タバコを すいます。
でんわ|Điện thoại|D|telephone|7|いま、ともだちに でんわして います。
ピザ|Bánh pizza|C|pizza|7|*ピザを 食べます。
まど|Cửa sổ|D|window|7|*窓を 開けます。
すいます|Hút|A|smoke|7|*タバコを 吸います。
はなします|Nói chuyện|A|talk, speak|7|*友だちと 話します。
ひきます|Chơi (nhạc cụ)|A|play (guitar, piano)|7|*ギターを 弾きます。
もちます|Cầm, mang|A|hold, carry|7|にもつを もちましょうか。
あけます|Mở|A|open|7|*窓を 開けます。
しめます|Đóng|A|close|7|*窓を 閉めます。
でんわをかけます|Gọi điện thoại|A|make a phone call|7|*友だちに 電話を かけます。
もってきます|Mang đến|A|bring (here)|7|明日 ランさんは ケーキを 持ってきます。
きんかくじ|Chùa Kinkaku-ji (Kim Các Tự)|E|Kinkaku-ji (Golden Pavilion)|7|
げんごがく|Ngôn ngữ học|J|linguistics|7|
いいます|Nói|A|say|7|
かい|Sò, ngao, vỏ sò|C|shellfish, shell|7|
たなか|Tanaka (họ)|G|Tanaka|7|
たんぼ|Ruộng|J|rice field|7|
どりょく|Nỗ lực|J|effort|7|
せんもん|Chuyên môn|J|specialty, field of expertise|7|
にく|Thịt|C|meat|7|
ぶたにく|Thịt heo|C|pork|7|
とりにく|Thịt gà|C|chicken (meat)|7|
ぎゅうにく|Thịt bò|C|beef|7|
りょうきん|Chi phí|J|fee|7|
やさい|Rau củ|C|vegetables|7|
じはん|~ giờ rưỡi|F|half past|7|
はん|Rưỡi, một nửa|F|half (past)|7|
はんぶん|Phần nửa|J|half|7|
はんがく|Nửa giá|J|half price|7|
だいがく|Trường đại học|E|university|7|
おとな|Người lớn|G|adult|7|
しょうがく|Tiểu học|E|elementary school|7|
しょうがくせい|Học sinh tiểu học|G|elementary school student|7|
ちから|Sức lực|J|strength|7|
けっこうです|Không cần đâu (từ chối lịch sự)|I|no thank you, that is fine|7|
おねがいします|Làm ơn, nhờ bạn (nhận lời đề nghị giúp)|I|please (do it for me)|7|
だいじょうぶ|Ổn, không sao|B|all right, OK|7|
だれ|Ai|G|who|7|`.split('\n').map((l,i)=>{const[k,m,c,e,b,x]=l.split('|');return{id:i,k,m,t:c[0],e:e||m,b:+b,x:x||''}});
const EN=D.map(d=>d.e);

/* Ngữ pháp – bản tiếng Anh (GR), tiếng Việt (VI, khớp theo thứ tự với GR) và song ngữ (GN) */
const GR=[
{l:"Bài 4",t:"Directions & N1 に N2 が あります",r:"A は B の きた / みなみ / ひがし / にし / まんなか です. Ask: A は B の どこですか. N1 に N2 が あります (N1 has N2); ask N1 に なにが ありますか. Sentence-final よ = new info, emphasis; ね = seeking agreement, confirming.",q:[
"ほっかいどうは 日本の＿＿です。[north]|きた|みなみ|ひがし|にし|きた = north, みなみ = south.",
"ながのは 日本の＿＿です。[the middle]|まんなか|きた|みなみ|にし|まんなか = the middle.",
"ハノイに なに＿＿ ありますか。[particle]|が|を|で|と|あります takes が: N1 に なにが ありますか.",
"このえいがは いいです＿＿。[telling new info, emphasis]|よ|ね|か|を|よ announces new info or adds emphasis; ね seeks agreement or confirms.",
"Which question asks where Nagoya is in Japan?|なごやは 日本の どこですか|なごやは 日本の なにですか|なごやは 日本の だれですか|なごやは 日本の いつですか|どこ asks about location: A は B の どこですか."]},
{l:"Bài 4",t:"Transport & travel time",r:"N (transport) で V ます: ひこうきで いきます. On foot: あるいて いきます (no で). Ask: なんで いきますか. P1 から P2 まで (transport で) どのくらいですか → ~くらいです. ~じかん = hours, ~じかんはん = hours and a half, ~ふん/ぷん = minutes. Special hours: 4 o'clock = よじ, 7 = しちじ, 9 = くじ.",q:[
"くるま＿＿ いきます。[by]|で|を|に|が|で marks the means of transport.",
"うちから がっこうまで 5ふん＿＿です。[about]|くらい|だけ|しか|ずつ|くらい means \"about\" after a quantity. しか needs a negative.",
"How do you read \"4 o'clock\"?|よじ|よんじ|しじ|よじかん|Special hours: 4 o'clock = よじ, 7 = しちじ, 9 = くじ.",
"How do you say \"go on foot\"?|あるいて いきます|あるいで いきます|あるきで いきます|あるいてで いきます|On foot uses the て-form あるいて, with no で.",
"Which question asks \"by what means?\"|かいしゃへ なんで いきますか|かいしゃへ なにを いきますか|かいしゃへ どこで いきますか|かいしゃへ だれで いきますか|何 (なん) + で asks for the means of transport."]},
{l:"Bài 4",t:"Adjectives: Aい / Aな, negatives & modifying nouns",r:"Aい: drop い + くないです (いい → よくないです). Aな and nouns: じゃありません (ではありません). きれい, ゆうめい, きらい end in い but are still Aな. Modifying nouns: Aい + N; Aな + な + N. Ask: S は どうですか / どんな N ですか.",q:[
"このかばんは あたらしく＿＿。[is not new]|ないです|じゃありません|ませんでした|なかったです|Aい: drop い and add くないです. くなかったです is the past tense.",
"ここは しずか＿＿。[is not quiet]|じゃありません|くないです|ないです|じゃありませんでした|しずか is an Aな, so it takes じゃありません.",
"What is the negative of いいです?|よくないです|いくないです|いいくないです|いいじゃありません|いい is irregular: it becomes よ before くない (よくないです).",
"ベトナムは＿＿ 国です。[a beautiful country]|きれいな|きれい|きれいの|きれいで|An Aな needs な before a noun: きれいな 国.",
"Which one is an Aな even though it ends in い?|きらい|あつい|さむい|おいしい|きれい, ゆうめい, きらい are Aな. The others are regular Aい."]},
{l:"Bài 4",t:"Joining sentences, degree & weather",r:"Joining two adjectives: が (contrast), そして (same direction). とても = very; あまり + negative = not very. Weather: N は month / 一年中、A です (ベトナムは 5がつ、あついです; とうきょうは 6がつ、あめが おおいです).",q:[
"このカメラは いいです＿＿、たかいです。[but]|が|そして|から|と|が joins two contrasting ideas (good BUT expensive).",
"とうきょうは おおきいです。＿＿、にぎやかです。[and]|そして|が|から|と|そして joins two ideas in the same direction (big AND lively).",
"なっとうは＿＿ おいしくないです。[not very]|あまり|とても|ずっと|いちばん|あまり always goes with a negative: あまり おいしくないです.",
"ベトナムは ５がつ、＿＿。[is hot]|あついです|あつなです|あつくです|あついなです|An Aい as predicate: あつい + です.",
"Which sentence means \"There is a lot of rain\"?|あめが おおいです|あめを おおいです|あめに おおいです|あめで おおいです|N が A describes a feature of the topic, so the particle is が."]},
{l:"Bài 5",t:"Verb tenses, どこか / なにか & それから",r:"Present / future: V ます / V ません. Past: V ました / V ませんでした. Time word + の + day / hour (せんしゅうの 土曜日). 今晩 does not take に. どこか(へ) / なにか(を) V ましたか; answer \"No\": どこも / なにも V ませんでした. それから = and then.",q:[
"きのう 私は 銀行へ いき＿＿。[did not go]|ませんでした|ません|ました|なかったです|Polite negative past: ませんでした.",
"きのう、サッカーを しました。＿＿、シャワーを あびました。[and then]|それから|が|から|と|それから links two actions in time order.",
"A: きのう、＿＿ へ いきましたか。 B: いいえ、どこも いきませんでした。[somewhere]|どこか|どこも|なにか|だれか|どこか = somewhere; どこも needs a negative verb.",
"A: けさ、なにか たべましたか。 B: いいえ、＿＿ たべませんでした。[nothing at all]|なにも|なにか|どこも|なにを|なにも + negative = nothing at all.",
"Which sentence is correct for \"Tonight I will have dinner with my family\"?|今晩、家族と ばんごはんを たべます|今晩に 家族と ばんごはんを たべます|今晩で 家族と ばんごはんを たべます|今晩を 家族と ばんごはんを たべます|今晩 does not take に."]},
{l:"Bài 5",t:"Adjectives in the past tense",r:"Aい: ~い → ~かったです; ~くないです → ~くなかったです (いい → よかったです / よくなかったです). Aな and nouns: ~です → ~でした; ~ではありません → ~ではありませんでした.",q:[
"せんしゅうの りょこうは とても＿＿。[was fun]|たのしかったです|たのしいでした|たのしでした|たのしくなかったです|Aい past: drop い and add かったです.",
"おとといの パーティーは あまり ひとが おおく＿＿。[was not very crowded]|なかったです|ないでした|ませんでした|でした|Aい negative past: ~くなかったです.",
"せんげつは たいへん ひま＿＿。[was free]|でした|かったです|くなかったです|です|Aな past: stem + でした. ひま is an Aな.",
"きのうは てんきが＿＿。[was good]|よかったです|いかったです|いいでした|よくなかったです|いい conjugates from よい, so the past is よかったです.",
"What is the negative past of おいしいです?|おいしくなかったです|おいしくないでした|おいしいじゃありませんでした|おいしかったくないです|Aい: drop い + くなかったです."]},
{l:"Bài 5",t:"Giving reasons: ~から & どうして",r:"Reason clause + から, result clause (ここの ビールが やすいですから、まいばん のみます). Ask for a reason: どうして ~ですか → ~から.",q:[
"ここの ビールが やすい＿＿、まいばん のみます。[because]|ですから|ですが|ですまで|ですより|から goes after the reason clause: やすいですから.",
"＿＿ ねむいですか。 ― きのう ねませんでしたから。[why]|どうして|どこ|だれ|いつ|The answer ~から gives a reason, so the question word is どうして.",
"どうして ビールを のみませんか。 ― ＿＿から。[because I dislike it]|きらいです|すきです|ほしいです|ひまです|きらいです + から = \"because I dislike it\".",
"あしたは やすみ＿＿、こんばん えいがを みます。[because tomorrow is a day off]|ですから|ですが|でした|まで|から gives the reason: やすみですから.",
"Which means \"I have no money, so I am not going anywhere\"?|おかねが ありませんから、どこも いきません|おかねが ありませんから、どこか いきません|おかねが ありませんが、どこも いきません|おかねが ありませんから、どこも いきました|から gives the reason + どこも + negative verb."]},
{l:"Bài 5",t:"Likes, wants & going in order to do something",r:"N が すき / きらい / ほしい です (ほしい → ほしくないです). V ます (drop ます) + たいです: たい conjugates like an Aい. N へ [N を V / V stem] に いきます / きます / かえります.",q:[
"私は にほんりょうりが＿＿。[like]|すきです|すきなです|すきをです|すきにです|Likes and dislikes take が: N が すきです.",
"私は あたらしい いえが＿＿。[want]|ほしいです|ほしです|ほしたいです|ほしいたいです|ほしい is an Aい: N が ほしいです.",
"にほんごを べんきょう＿＿。[want to study]|したいです|ますたいです|しますたいです|したです|Drop ます + たいです: べんきょうし + たいです.",
"らいしゅう ホーチミンしへ あそび＿＿ いきます。[in order to play]|に|で|を|が|V stem + に いきます = go in order to do V.",
"Which means \"I do not want anything\"?|なにも ほしくないです|なにも ほしいです|なにを ほしいです|なにか ほしくないです|なにも + negative; ほしい → ほしくないです."]},
{l:"Bài 6",t:"Invitations, accepting, declining & events",r:"いっしょに V ませんか = inviting. Accept: いいですね + V ましょう. Polite refusal: すみません、ちょっと… (+ reason ~から). 【Place】で N が あります = an event takes place at a location (あした 会社で 会議が あります).",q:[
"いっしょに えいがを みません＿＿。[inviting]|か|ね|よ|を|V ませんか is the invitation pattern. か makes it a question.",
"A: いっしょに カラオケに いきませんか。 B: いいですね。いき＿＿。[accepting]|ましょう|ません|ました|たいです|V ましょう is the \"let's\" form.",
"A: あした いっしょに かいものに いきませんか。 B: すみません、あしたは＿＿…。いそがしいですから。[polite refusal]|ちょっと|とても|あまり|いちばん|すみません、ちょっと… is a polite refusal.",
"あした 会社＿＿ かいぎが あります。[at]|で|に|を|と|An event takes place at a location marked by で.",
"Which accepts \"いっしょに えいがを みませんか\"?|いいですね。みましょう|すみません、ちょっと…|いいえ、けっこうです|いいえ、だいじょうぶです|いいですね + V ましょう shows agreement. すみません、ちょっと… is a polite refusal."]},
{l:"Bài 6",t:"Counters (助数詞)",r:"Number + counter shows the type of object: ~まい (枚) = thin, flat things (tickets, stamps, postcards); ~ほん/ぽん (本) = long things (umbrellas, bottles); ~さつ (冊) = books, magazines, dictionaries; ~つ (ひとつ, ふたつ, みっつ, よっつ, いつつ) = general counting. Ask: なんまい, なんぼん. Pattern: N を quantity + V (チケットを 2まい かいました).",q:[
"チケットを ２＿＿ かいました。[2 tickets]|まい|ほん|さつ|ふん|枚 (まい) counts thin, flat things such as tickets and stamps.",
"あそこに かさが ５＿＿ あります。[5 umbrellas]|ほん|まい|さつ|ふん|本 (ほん / ぽん) counts long things such as umbrellas and bottles.",
"せんせいは じしょが ２＿＿ あります。[2 dictionaries]|さつ|ほん|まい|ふん|冊 (さつ) counts books, magazines and dictionaries.",
"ケーキを 五＿＿ かいます。[5 cakes]|つ|まい|ほん|さつ|General counting: ひとつ, ふたつ, みっつ, よっつ, いつつ (五つ).",
"Which asks \"How many handkerchiefs are there?\"|そこに ハンカチが なんまい ありますか|そこに ハンカチが なんぼん ありますか|そこに ハンカチが なんさつ ありますか|そこに ハンカチが なんにん ありますか|A handkerchief is thin and flat, so ask 何枚 (なんまい)."]},
{l:"Bài 6",t:"Comparative & superlative",r:"N1 は N2 より A です (より goes right after the thing compared against); degree: ちょっと / すこし = a little, ずっと = far more. Two items: N と N と どちらが A ですか → N の ほうが A です / どちらも A です. Superlative: range で なに / どこ / いつ / だれ が いちばん A ですか.",q:[
"えいごは にほんご＿＿ かんたんです。[easier than]|より|から|まで|ほど|N1 は N2 より A = N1 is more A than N2.",
"しんかんせんと ひこうきと＿＿が はやいですか。[which]|どちら|どれ|だれ|いつ|When comparing two items, ask with どちら.",
"ひこうきの＿＿が はやいです。[the ~ side is]|ほう|いちばん|より|ほし|N の ほうが = \"the N side is more ...\".",
"スポーツで なにが＿＿ すきですか。[most]|いちばん|とても|あまり|ちょっと|いちばん = the most. とても means \"very\".",
"How do you say \"I like both\"?|どちらも すきです|どちらが すきです|どちらを すきです|どちらの ほうが すきです|どちらも = both of two."]},
{l:"Bài 6",t:"もう / まだ, どうですか & ね / よ",r:"もう V ましたか → はい、もう V ました / いいえ、まだです. もう + N / A (present) = \"already\" (もう 9じです). まだ あります = still have; もう ありません = no more. どうですか = asking for an impression / suggesting. ね = seeking agreement, confirming; よ = new info, emphasis.",q:[
"もう しゅくだいを しましたか。 ― いいえ、＿＿です。[not yet]|まだ|もう|いつも|あまり|\"Not yet\" = いいえ、まだです.",
"もう くすりを のみましたか。 ― はい、＿＿ のみました。[already]|もう|まだ|いつも|あまり|はい、もう V ました = \"Yes, I already did\".",
"やさいは＿＿ ありますか。 ― いいえ、もう ありません。[still]|まだ|もう|いつも|あまり|まだ あります = still have; もう ありません = none left.",
"もう 12じです＿＿。[It's already 12, isn't it (seeking agreement)]|ね|よ|か|が|ね seeks agreement; よ gives new information.",
"A: にほんりょうりは＿＿ですか。 B: いいですね。そうしましょう。[how about (suggesting)]|どう|どこ|なに|だれ|どうですか is used to suggest something or ask for an impression.",
"Which asks \"Have you eaten yet?\"|もう ごはんを たべましたか|まだ ごはんを たべましたか|もう ごはんを たべませんか|まだ ごはんを たべますか|もう + V ましたか (past) asks if it has already happened."]},
{l:"Bài 7",t:"あります / います & position words",r:"N が あります (things) / N が います (people, animals). (1) ～に ～が あります / います: stresses the location (ロビーに テレビが あります). (2) ～は ～に あります / います: stresses the subject (テレビは ロビーに あります). N の + うえ・した・なか・そと・まえ・うしろ・そば・となり・ひだり・みぎ・ちかく・あいだ. Listing: と (complete), や … など (examples, and more).",q:[
"木の したに いぬが＿＿。[there is (a dog)]|います|あります|いりません|いません|Living things use います.",
"かばんの なかに さいふが＿＿。[there is (a wallet)]|あります|います|いません|いりません|Inanimate objects use あります.",
"テレビは ロビー＿＿ あります。[location particle]|に|で|を|と|Location of existence: に + あります / います.",
"ぼうしは いすの＿＿に あります。[behind]|うしろ|まえ|うえ|なか|うしろ = behind. まえ = in front.",
"Which sentence lists EXAMPLES (and more)?|ほんや ノートや じしょなどが あります|ほんと ノートと じしょが あります|ほんを ノートを じしょが あります|ほんは ノートは じしょが あります|や … など lists examples; と lists everything."]},
{l:"Bài 7",t:"Verb groups & the て-form",r:"Group 1: the syllable before ます is in the い-row (い, ち, り, き, ぎ, し, み, び, に). Group 2: え-row (たべます, あけます) + some exceptions (みます, ねます, おきます, あびます, かります). Group 3: きます, します, N + します. て-form: い・ち・り → って; に・み・び → んで; き → いて (exception: いきます → いって); ぎ → いで; し → して. Group 2: drop ます + て. Group 3: きて, して.",q:[
"かいます → ＿＿[て-form]|かって|かいて|かんで|かいで|Endings い・ち・り become って.",
"のみます → ＿＿[て-form]|のんで|のいて|のって|のみて|Endings に・み・び become んで.",
"かきます → ＿＿[て-form]|かいて|かいで|かって|かんで|き becomes いて. ぎ becomes いで.",
"いきます → ＿＿[て-form (irregular)]|いって|いいて|いきて|いんで|いきます is the exception: いって, not いいて.",
"かります → ＿＿[て-form (group 2)]|かりて|かって|かんで|かいて|かります (to borrow) is group 2: drop ます + て = かりて.",
"Which verb belongs to Group 3?|べんきょうします|たべます|のみます|かいます|N + します (べんきょうします) is Group 3."]},
{l:"Bài 7",t:"V て ください & V て います",r:"V て ください = please do V (なまえを かいて ください). V て います = is doing V (いま、ごはんを たべて います); V て いません = is not doing V. Ask: なにを して いますか → なにも して いません.",q:[
"なまえを かいて＿＿。[please write]|ください|います|ましょう|ませんか|V て + ください = please do V.",
"いま、ともだちに でんわして＿＿。[is calling]|います|ください|ません|ました|V て います = is doing V.",
"A: あなたは なにを して いますか。 B: ＿＿ して いません。[nothing]|なにも|なにか|どこも|どこか|なにも + negative = nothing at all.",
"あした ９じに＿＿ ください。[please come]|きて|きいて|きって|くて|きます → きて (group 3).",
"Which means \"My mother is cleaning the room\"?|ははは へやを そうじして います|ははは へやを そうじします|ははは へやを そうじして ください|ははは へやを そうじして いません|V て います = is doing V."]},
{l:"Bài 7",t:"V-かた, わかります & どのN / どれ",r:"V ます (drop ます) + かた = way of doing (よみかた, かきかた, つかいかた). N が わかります / わかりません (the thing understood is marked by が). どのN goes with a noun (どの おさらですか); どれ stands alone with no noun after it (どれですか).",q:[
"よみます → \"cách đọc\": よみ＿＿[way of doing]|かた|ます|て|たい|Drop ます and add かた.",
"わたしは えいご＿＿ わかります。[understand]|が|を|に|で|わかります / わかりません mark the thing understood with が.",
"おさらを とって ください。 ― ＿＿ おさらですか。[which plate]|どの|どれ|どこ|だれ|どの goes with a noun: どの おさら.",
"しおを とって ください。 ― ＿＿ですか。[which one]|どれ|どの|どこ|だれ|どれ stands alone, with no noun after it.",
"Which means \"Please teach me how to use the computer\"?|パソコンの つかいかたを おしえて ください|パソコンの つかいますかたを おしえて ください|パソコンの つかうかたを おしえて ください|パソコンの つかいかたに おしえて ください|Verb stem つかい + かた = way of using."]},
{l:"Bài 7",t:"V ましょうか & ませんか / ましょう / ましょうか",r:"V ましょうか = \"Shall I do V (for you)?\". Reply: accept ええ / すみません、おねがいします; decline いいえ、けっこうです / いいえ、だいじょうぶです. Comparison: V ませんか = inviting, asking the other's wish; V ましょう = actively urging \"let's\"; V ましょうか = offering help.",q:[
"せんせい、にもつを もち＿＿。[shall I carry it]|ましょうか|ましょう|ませんか|ます|V ましょうか = offering help.",
"A: てつだいましょうか。 B: ええ、すみません、＿＿。[please do]|おねがいします|けっこうです|だいじょうぶです|ざんねんです|おねがいします accepts an offer of help.",
"A: かさを かしましょうか。 B: いいえ、＿＿。[declining]|けっこうです|おねがいします|いいですね|ざんねんです|いいえ、けっこうです / だいじょうぶです declines the offer.",
"いっしょに えいがを みに いき＿＿。[let's go]|ましょう|ました|ません|ましたか|V ましょう actively urges \"let's do it\".",
"Which sentence OFFERS to help someone?|むかえに いきましょうか|むかえに いきませんか|むかえに いきましょう|むかえに いきましたか|V ましょうか = \"Shall I ~ for you?\"."]},
{l:"Bài 7",t:"Asking the subject だれが / なにが & まだ / もう",r:"Question word + が asks for the subject: だれが (who), なにが (what), どこが (which place), いつが (when); answer with exactly that element (せんせいが いきません). お金が まだ あります = still have money; お金が まだ ありません = do not have money yet; お金が もう ありません = no money left.",q:[
"＿＿が お客さんと はなして いますか。 ― キムさんです。[who]|だれ|なに|どこ|いつ|だれが asks for a person as the subject.",
"A: ＿＿が ありますか。 B: ケーキが あります。[what]|なに|だれ|どこ|いつ|なにが asks for a thing as the subject.",
"おかねが＿＿ ありません。[no money left]|もう|まだ|いつも|よく|もう ありません = none left.",
"おかねが＿＿ ありません。[do not have money yet]|まだ|もう|いつも|よく|まだ ありません = still do not have.",
"Which asks \"Who will not go on the trip with everyone?\"|だれが みんなと りょこうに いきませんか|だれを みんなと りょこうに いきませんか|だれに みんなと りょこうに いきませんか|だれで みんなと りょこうに いきませんか|だれが asks for the subject of the action."]}
];

const VI=[
{t:"Hướng, vị trí trong nước & N1 に N2 が あります",r:"A は B の きた / みなみ / ひがし / にし / まんなか です. Hỏi: A は B の どこですか. N1 に N2 が あります (N1 có N2); hỏi N1 に なにが ありますか. Cuối câu: よ = báo thông tin mới, nhấn mạnh; ね = xin đồng tình, xác nhận.",q:[
"ほっかいどうは 日本の＿＿です。[bắc]|きた = bắc, みなみ = nam.",
"ながのは 日本の＿＿です。[ở giữa, trung tâm]|まんなか = ở giữa, trung tâm.",
"ハノイに なに＿＿ ありますか。[trợ từ]|あります đi với が: N1 に なにが ありますか.",
"このえいがは いいです＿＿。[báo tin mới, nhấn mạnh]|よ báo thông tin mới hoặc nhấn mạnh; ね xin đồng tình, xác nhận.",
"Câu nào hỏi vị trí của なごや trong nước Nhật?|どこ hỏi vị trí: A は B の どこですか."]},
{t:"Phương tiện & thời gian di chuyển",r:"N (phương tiện) で V ます: ひこうきで いきます. Đi bộ: あるいて いきます (không dùng で). Hỏi: なんで いきますか. P1 から P2 まで (phương tiện で) どのくらいですか → ~くらいです. ~じかん = ~ tiếng, ~じかんはん = ~ tiếng rưỡi, ~ふん/ぷん = ~ phút. Giờ đặc biệt: 4 giờ = よじ, 7 giờ = しちじ, 9 giờ = くじ.",q:[
"くるま＿＿ いきます。[bằng]|で chỉ phương tiện di chuyển.",
"うちから がっこうまで 5ふん＿＿です。[khoảng]|くらい nghĩa là \"khoảng\" sau số lượng. しか phải đi với phủ định.",
"Đọc \"4 giờ\" như thế nào?|Giờ đặc biệt: 4 giờ = よじ, 7 giờ = しちじ, 9 giờ = くじ.",
"Nói \"đi bộ\" như thế nào?|Đi bộ dùng thể て あるいて, không có で.",
"Câu nào hỏi \"bằng phương tiện gì?\"|何 (なん) + で hỏi phương tiện di chuyển."]},
{t:"Tính từ: Aい / Aな, phủ định & bổ nghĩa danh từ",r:"Aい: bỏ い + くないです (いい → よくないです). Aな và danh từ: じゃありません (ではありません). きれい, ゆうめい, きらい kết thúc bằng い nhưng vẫn là Aな. Bổ nghĩa danh từ: Aい + N; Aな + な + N. Hỏi: S は どうですか / どんな N ですか.",q:[
"このかばんは あたらしく＿＿。[không mới]|Aい: bỏ い và thêm くないです. くなかったです là quá khứ.",
"ここは しずか＿＿。[không yên tĩnh]|しずか là Aな nên dùng じゃありません.",
"Thể phủ định của いいです?|いい bất quy tắc: đổi thành よ trước くない (よくないです).",
"ベトナムは＿＿ 国です。[đất nước đẹp]|Aな cần な trước danh từ: きれいな 国.",
"Từ nào là Aな dù kết thúc bằng い?|きれい, ゆうめい, きらい là Aな. Các từ còn lại là Aい bình thường."]},
{t:"Nối câu, mức độ & thời tiết",r:"Nối hai tính từ: が (ngược nghĩa), そして (xuôi nghĩa). とても = rất; あまり + phủ định = không ~ lắm. Nói về thời tiết: N は 月 / 一年中、A です (ベトナムは 5がつ、あついです; とうきょうは 6がつ、あめが おおいです).",q:[
"このカメラは いいです＿＿、たかいです。[nhưng]|が nối hai ý trái ngược (tốt NHƯNG đắt).",
"とうきょうは おおきいです。＿＿、にぎやかです。[và]|そして nối hai ý xuôi nghĩa (to VÀ náo nhiệt).",
"なっとうは＿＿ おいしくないです。[không ~ lắm]|あまり luôn đi với phủ định: あまり おいしくないです.",
"ベトナムは ５がつ、＿＿。[nóng]|Aい làm vị ngữ: あつい + です.",
"Câu nào nghĩa là \"Mưa nhiều\"?|N が A mô tả đặc điểm của chủ đề nên trợ từ là が."]},
{t:"Thì của động từ, どこか / なにか & それから",r:"Hiện tại / tương lai: V ます / V ません. Quá khứ: V ました / V ませんでした. Từ chỉ thời gian + の + ngày / giờ (せんしゅうの 土曜日). 今晩 không đi với に. どこか(へ) / なにか(を) V ましたか; trả lời \"Không\": どこも / なにも V ませんでした. それから = sau đó.",q:[
"きのう 私は 銀行へ いき＿＿。[đã không đi]|Phủ định quá khứ lịch sự: ませんでした.",
"きのう、サッカーを しました。＿＿、シャワーを あびました。[sau đó]|それから nối hai hành động theo thứ tự thời gian.",
"A: きのう、＿＿ へ いきましたか。 B: いいえ、どこも いきませんでした。[đâu đó]|どこか = đâu đó; どこも cần động từ phủ định.",
"A: けさ、なにか たべましたか。 B: いいえ、＿＿ たべませんでした。[không ... gì cả]|なにも + phủ định = không ... gì cả.",
"Câu nào đúng khi nói \"Tối nay tôi ăn tối cùng gia đình\"?|今晩 không đi với に."]},
{t:"Tính từ ở thì quá khứ",r:"Aい: ~い → ~かったです; ~くないです → ~くなかったです (いい → よかったです / よくなかったです). Aな và danh từ: ~です → ~でした; ~ではありません → ~ではありませんでした.",q:[
"せんしゅうの りょこうは とても＿＿。[vui]|Aい quá khứ: bỏ い và thêm かったです.",
"おとといの パーティーは あまり ひとが おおく＿＿。[không đông lắm]|Aい phủ định quá khứ: ~くなかったです.",
"せんげつは たいへん ひま＿＿。[rảnh]|Aな quá khứ: gốc + でした. ひま là Aな.",
"きのうは てんきが＿＿。[tốt]|いい chia từ よい nên quá khứ là よかったです.",
"Phủ định quá khứ của おいしいです?|Aい: bỏ い + くなかったです."]},
{t:"Nêu lý do ~から & どうして",r:"Mệnh đề lý do + から、mệnh đề kết quả (ここの ビールが やすいですから、まいばん のみます). Hỏi lý do: どうして ~ですか → ~から.",q:[
"ここの ビールが やすい＿＿、まいばん のみます。[vì]|から đặt sau mệnh đề nêu lý do: やすいですから.",
"＿＿ ねむいですか。 ― きのう ねませんでしたから。[tại sao]|Câu trả lời ~から nêu lý do nên từ hỏi là どうして.",
"どうして ビールを のみませんか。 ― ＿＿から。[vì tôi ghét]|きらいです + から = \"vì tôi ghét\".",
"あしたは やすみ＿＿、こんばん えいがを みます。[vì ngày mai nghỉ]|から nêu lý do: やすみですから.",
"Câu nào nghĩa là \"Vì không có tiền nên không đi đâu cả\"?|から nêu lý do + どこも + động từ phủ định."]},
{t:"Thích, muốn & đi để làm gì",r:"N が すき / きらい / ほしい です (ほしい → ほしくないです). V ます (bỏ ます) + たいです: たい chia như Aい. N へ [N を V / V ます (bỏ ます)] に いきます / きます / かえります.",q:[
"私は にほんりょうりが＿＿。[thích]|Thích / ghét dùng が: N が すきです.",
"私は あたらしい いえが＿＿。[muốn có]|ほしい là Aい: N が ほしいです.",
"にほんごを べんきょう＿＿。[muốn học]|Bỏ ます + たいです: べんきょうし + たいです.",
"らいしゅう ホーチミンしへ あそび＿＿ いきます。[để chơi]|V (bỏ ます) + に いきます = đi để làm V.",
"Câu nào nghĩa là \"Tôi không muốn gì cả\"?|なにも + phủ định; ほしい → ほしくないです."]},
{t:"Rủ rê, đồng ý, từ chối & sự kiện",r:"いっしょに V ませんか = rủ làm cùng. Đồng ý: いいですね + V ましょう. Từ chối lịch sự: すみません、ちょっと… (+ lý do ~から). 【Place】で N が あります = có sự kiện / buổi ~ tại địa điểm (あした 会社で 会議が あります).",q:[
"いっしょに えいがを みません＿＿。[rủ rê]|V ませんか là mẫu rủ rê. か tạo câu hỏi.",
"A: いっしょに カラオケに いきませんか。 B: いいですね。いき＿＿。[đồng ý]|V ましょう kêu gọi cùng làm.",
"A: あした いっしょに かいものに いきませんか。 B: すみません、あしたは＿＿…。いそがしいですから。[từ chối lịch sự]|すみません、ちょっと… là cách từ chối lịch sự.",
"あした 会社＿＿ かいぎが あります。[tại]|Sự kiện diễn ra tại địa điểm đánh dấu bằng で.",
"Câu nào đồng ý lời mời \"いっしょに えいがを みませんか\"?|いいですね + V ましょう thể hiện sự đồng ý. すみません、ちょっと… là từ chối lịch sự."]},
{t:"Trợ số từ (助数詞)",r:"Số từ + trợ số từ để chỉ chủng loại: ~まい (枚) = vật mỏng, phẳng (vé, tem, bưu thiếp); ~ほん/ぽん (本) = vật dài (ô, chai); ~さつ (冊) = sách, tạp chí, từ điển; ~つ (ひとつ, ふたつ, みっつ, よっつ, いつつ) = đếm chung. Hỏi: なんまい, なんぼん. Mẫu: N を số lượng + V (チケットを 2まい かいました).",q:[
"チケットを ２＿＿ かいました。[2 tấm vé]|枚 (まい) dùng cho vật mỏng, phẳng như vé, tem.",
"あそこに かさが ５＿＿ あります。[5 cái ô]|本 (ほん / ぽん) dùng cho vật dài như ô, chai.",
"せんせいは じしょが ２＿＿ あります。[2 quyển từ điển]|冊 (さつ) dùng cho sách, tạp chí, từ điển.",
"ケーキを 五＿＿ かいます。[5 cái bánh]|Đếm chung: ひとつ, ふたつ, みっつ, よっつ, いつつ (五つ).",
"Câu nào hỏi \"Ở đó có mấy cái khăn tay?\"|ハンカチ là vật mỏng, phẳng nên hỏi 何枚 (なんまい)."]},
{t:"So sánh hơn & so sánh nhất",r:"N1 は N2 より A です (より đặt ngay sau đối tượng bị đem ra so sánh); mức độ: ちょっと / すこし = một chút, ずっと = hơn hẳn. Hỏi hai đối tượng: N と N と どちらが A ですか → N の ほうが A です / どちらも A です. So sánh nhất: phạm vi で なに / どこ / いつ / だれ が いちばん A ですか.",q:[
"えいごは にほんご＿＿ かんたんです。[dễ hơn]|N1 は N2 より A = N1 A hơn N2.",
"しんかんせんと ひこうきと＿＿が はやいですか。[cái nào]|So sánh hai đối tượng thì hỏi bằng どちら.",
"ひこうきの＿＿が はやいです。[phía ~ hơn]|N の ほうが = \"bên N hơn\".",
"スポーツで なにが＿＿ すきですか。[nhất]|いちばん = nhất. とても nghĩa là \"rất\".",
"Nói \"Tôi thích cả hai\" như thế nào?|どちらも = cả hai."]},
{t:"もう / まだ, どうですか & ね / よ",r:"もう V ましたか → はい、もう V ました / いいえ、まだです. もう + N / A hiện tại = \"đã ~ rồi\" (もう 9じです). まだ あります = vẫn còn; もう ありません = đã hết. どうですか = hỏi cảm nhận / đề xuất. ね = xin đồng tình, xác nhận; よ = thông tin mới, nhấn mạnh.",q:[
"もう しゅくだいを しましたか。 ― いいえ、＿＿です。[chưa]|\"Chưa\" = いいえ、まだです.",
"もう くすりを のみましたか。 ― はい、＿＿ のみました。[đã ~ rồi]|はい、もう V ました = \"Vâng, tôi đã làm rồi\".",
"やさいは＿＿ ありますか。 ― いいえ、もう ありません。[vẫn còn]|まだ あります = vẫn còn; もう ありません = đã hết.",
"もう 12じです＿＿。[12 giờ rồi nhỉ (xin đồng tình)]|ね kêu gọi sự đồng tình; よ đưa thông tin mới.",
"A: にほんりょうりは＿＿ですか。 B: いいですね。そうしましょう。[thế nào (đề xuất)]|どうですか dùng để đề xuất hoặc hỏi cảm nhận.",
"Câu nào hỏi \"Bạn ăn cơm chưa?\"|もう + V ましたか (quá khứ) hỏi việc đã xảy ra chưa."]},
{t:"あります / います & từ chỉ vị trí",r:"N が あります (đồ vật) / N が います (người, động vật). (1) ～に ～が あります / います: nhấn mạnh vị trí (ロビーに テレビが あります). (2) ～は ～に あります / います: nhấn mạnh đối tượng (テレビは ロビーに あります). N の + うえ・した・なか・そと・まえ・うしろ・そば・となり・ひだり・みぎ・ちかく・あいだ. Liệt kê: と (đầy đủ), や … など (ví dụ, còn nữa).",q:[
"木の したに いぬが＿＿。[có (con chó)]|Sinh vật sống dùng います.",
"かばんの なかに さいふが＿＿。[có (cái ví)]|Đồ vật vô tri dùng あります.",
"テレビは ロビー＿＿ あります。[trợ từ chỉ vị trí]|Vị trí tồn tại: に + あります / います.",
"ぼうしは いすの＿＿に あります。[phía sau]|うしろ = phía sau. まえ = phía trước.",
"Câu nào liệt kê VÍ DỤ (còn nữa)?|や … など liệt kê ví dụ; と liệt kê đầy đủ."]},
{t:"Nhóm động từ & thể て",r:"Nhóm 1: chữ trước ます thuộc hàng い (い, ち, り, き, ぎ, し, み, び, に). Nhóm 2: hàng え (たべます, あけます) + một số ngoại lệ (みます, ねます, おきます, あびます, かります). Nhóm 3: きます, します, N + します. Thể て: い・ち・り → って; に・み・び → んで; き → いて (ngoại lệ: いきます → いって); ぎ → いで; し → して. Nhóm 2: bỏ ます + て. Nhóm 3: きて, して.",q:[
"かいます → ＿＿[thể て]|Đuôi い・ち・り chuyển thành って.",
"のみます → ＿＿[thể て]|Đuôi に・み・び chuyển thành んで.",
"かきます → ＿＿[thể て]|き chuyển thành いて. ぎ chuyển thành いで.",
"いきます → ＿＿[thể て (bất quy tắc)]|いきます là ngoại lệ: いって, không phải いいて.",
"かります → ＿＿[thể て (nhóm 2)]|かります (mượn) thuộc nhóm 2: bỏ ます + て = かりて.",
"Động từ nào thuộc Nhóm 3?|N + します (べんきょうします) thuộc nhóm 3."]},
{t:"V て ください & V て います",r:"V て ください = xin hãy V (なまえを かいて ください). V て います = đang V (いま、ごはんを たべて います); V て いません = đang không V. Hỏi: なにを して いますか → なにも して いません.",q:[
"なまえを かいて＿＿。[xin hãy viết]|V て + ください = xin hãy V.",
"いま、ともだちに でんわして＿＿。[đang gọi điện]|V て います = đang V.",
"A: あなたは なにを して いますか。 B: ＿＿ して いません。[không làm gì cả]|なにも + phủ định = không ... gì cả.",
"あした ９じに＿＿ ください。[xin hãy đến]|きます → きて (nhóm 3).",
"Câu nào nghĩa là \"Mẹ đang dọn phòng\"?|V て います = đang V."]},
{t:"V-かた, わかります & どのN / どれ",r:"V ます (bỏ ます) + かた = cách làm (よみかた, かきかた, つかいかた). N が わかります / わかりません (thứ được hiểu đánh dấu bằng が). どのN: đi kèm danh từ (どの おさらですか); どれ: dùng một mình, không có danh từ theo sau (どれですか).",q:[
"よみます → \"cách đọc\": よみ＿＿[cách làm]|Bỏ ます và thêm かた.",
"わたしは えいご＿＿ わかります。[hiểu]|わかります / わかりません đánh dấu thứ được hiểu bằng が.",
"おさらを とって ください。 ― ＿＿ おさらですか。[cái đĩa nào]|どの đi kèm danh từ: どの おさら.",
"しおを とって ください。 ― ＿＿ですか。[cái nào]|どれ dùng một mình, không có danh từ theo sau.",
"Câu nào nghĩa là \"Xin hãy chỉ cách dùng máy tính\"?|Gốc động từ つかい + かた = cách dùng."]},
{t:"V ましょうか & ませんか / ましょう / ましょうか",r:"V ましょうか = \"Để tôi V (giúp) nhé?\". Đáp: đồng ý ええ / すみません、おねがいします; từ chối いいえ、けっこうです / いいえ、だいじょうぶです. So sánh: V ませんか = rủ rê, hỏi ý đối phương; V ましょう = kêu gọi cùng làm một cách chủ động; V ましょうか = đề nghị giúp đỡ.",q:[
"せんせい、にもつを もち＿＿。[để em xách giúp nhé]|V ましょうか = đề nghị giúp đỡ.",
"A: てつだいましょうか。 B: ええ、すみません、＿＿。[nhờ giúp]|おねがいします dùng để nhận lời đề nghị giúp đỡ.",
"A: かさを かしましょうか。 B: いいえ、＿＿。[từ chối]|いいえ、けっこうです / だいじょうぶです dùng để từ chối.",
"いっしょに えいがを みに いき＿＿。[cùng đi đi (kêu gọi)]|V ましょう kêu gọi cùng làm một cách chủ động.",
"Câu nào dùng để ĐỀ NGHỊ GIÚP ĐỠ người khác?|V ましょうか = \"Để tôi ~ giúp nhé?\"."]},
{t:"Hỏi chủ thể だれが / なにが & まだ / もう",r:"Từ hỏi + が hỏi chủ thể của câu: だれが (ai), なにが (cái gì), どこが (chỗ nào), いつが (khi nào); trả lời bằng đúng thành phần đó (せんせいが いきません). お金が まだ あります = vẫn còn tiền; お金が まだ ありません = vẫn chưa có tiền; お金が もう ありません = đã hết tiền rồi.",q:[
"＿＿が お客さんと はなして いますか。 ― キムさんです。[ai]|だれが hỏi chủ thể là người.",
"A: ＿＿が ありますか。 B: ケーキが あります。[cái gì]|なにが hỏi chủ thể là vật.",
"おかねが＿＿ ありません。[đã hết tiền rồi]|もう ありません = đã hết rồi.",
"おかねが＿＿ ありません。[vẫn chưa có tiền]|まだ ありません = vẫn chưa có.",
"Câu nào hỏi \"Ai sẽ không đi du lịch cùng mọi người?\"|だれが hỏi chủ thể của hành động."]}
];

const GN=[
{l:"Bài 4",t:["Hướng, vị trí trong nước & N1 に N2 が あります", "Directions & N1 に N2 が あります"],r:["A は B の きた / みなみ / ひがし / にし / まんなか です. Hỏi: A は B の どこですか. N1 に N2 が あります (N1 có N2); hỏi N1 に なにが ありますか. Cuối câu: よ = báo thông tin mới, nhấn mạnh; ね = xin đồng tình, xác nhận.", "A は B の きた / みなみ / ひがし / にし / まんなか です. Ask: A は B の どこですか. N1 に N2 が あります (N1 has N2); ask N1 に なにが ありますか. Sentence-final よ = new info, emphasis; ね = seeking agreement, confirming."],q:[
"ほっかいどうは 日本の＿＿です。[bắc / north]|きた|みなみ|ひがし|にし|きた = bắc, みなみ = nam.|きた = north, みなみ = south.",
"ながのは 日本の＿＿です。[ở giữa, trung tâm / the middle]|まんなか|きた|みなみ|にし|まんなか = ở giữa, trung tâm.|まんなか = the middle.",
"ハノイに なに＿＿ ありますか。[trợ từ / particle]|が|を|で|と|あります đi với が: N1 に なにが ありますか.|あります takes が: N1 に なにが ありますか.",
"このえいがは いいです＿＿。[báo tin mới, nhấn mạnh / telling new info, emphasis]|よ|ね|か|を|よ báo thông tin mới hoặc nhấn mạnh; ね xin đồng tình, xác nhận.|よ announces new info or adds emphasis; ね seeks agreement or confirms."]},
{l:"Bài 4",t:["Phương tiện & thời gian di chuyển", "Transport & travel time"],r:["N (phương tiện) で V ます: ひこうきで いきます. Đi bộ: あるいて いきます (không dùng で). Hỏi: なんで いきますか. P1 から P2 まで (phương tiện で) どのくらいですか → ~くらいです. ~じかん = ~ tiếng, ~じかんはん = ~ tiếng rưỡi, ~ふん/ぷん = ~ phút. Giờ đặc biệt: 4 giờ = よじ, 7 giờ = しちじ, 9 giờ = くじ.", "N (transport) で V ます: ひこうきで いきます. On foot: あるいて いきます (no で). Ask: なんで いきますか. P1 から P2 まで (transport で) どのくらいですか → ~くらいです. ~じかん = hours, ~じかんはん = hours and a half, ~ふん/ぷん = minutes. Special hours: 4 o'clock = よじ, 7 = しちじ, 9 = くじ."],q:[
"くるま＿＿ いきます。[bằng / by]|で|を|に|が|で chỉ phương tiện di chuyển.|で marks the means of transport.",
"うちから がっこうまで 5ふん＿＿です。[khoảng / about]|くらい|だけ|しか|ずつ|くらい nghĩa là \"khoảng\" sau số lượng. しか phải đi với phủ định.|くらい means \"about\" after a quantity. しか needs a negative."]},
{l:"Bài 4",t:["Tính từ: Aい / Aな, phủ định & bổ nghĩa danh từ", "Adjectives: Aい / Aな, negatives & modifying nouns"],r:["Aい: bỏ い + くないです (いい → よくないです). Aな và danh từ: じゃありません (ではありません). きれい, ゆうめい, きらい kết thúc bằng い nhưng vẫn là Aな. Bổ nghĩa danh từ: Aい + N; Aな + な + N. Hỏi: S は どうですか / どんな N ですか.", "Aい: drop い + くないです (いい → よくないです). Aな and nouns: じゃありません (ではありません). きれい, ゆうめい, きらい end in い but are still Aな. Modifying nouns: Aい + N; Aな + な + N. Ask: S は どうですか / どんな N ですか."],q:[
"このかばんは あたらしく＿＿。[không mới / is not new]|ないです|じゃありません|ませんでした|なかったです|Aい: bỏ い và thêm くないです. くなかったです là quá khứ.|Aい: drop い and add くないです. くなかったです is the past tense.",
"ここは しずか＿＿。[không yên tĩnh / is not quiet]|じゃありません|くないです|ないです|じゃありませんでした|しずか là Aな nên dùng じゃありません.|しずか is an Aな, so it takes じゃありません.",
"ベトナムは＿＿ 国です。[đất nước đẹp / a beautiful country]|きれいな|きれい|きれいの|きれいで|Aな cần な trước danh từ: きれいな 国.|An Aな needs な before a noun: きれいな 国."]},
{l:"Bài 4",t:["Nối câu, mức độ & thời tiết", "Joining sentences, degree & weather"],r:["Nối hai tính từ: が (ngược nghĩa), そして (xuôi nghĩa). とても = rất; あまり + phủ định = không ~ lắm. Nói về thời tiết: N は 月 / 一年中、A です (ベトナムは 5がつ、あついです; とうきょうは 6がつ、あめが おおいです).", "Joining two adjectives: が (contrast), そして (same direction). とても = very; あまり + negative = not very. Weather: N は month / 一年中、A です (ベトナムは 5がつ、あついです; とうきょうは 6がつ、あめが おおいです)."],q:[
"このカメラは いいです＿＿、たかいです。[nhưng / but]|が|そして|から|と|が nối hai ý trái ngược (tốt NHƯNG đắt).|が joins two contrasting ideas (good BUT expensive).",
"とうきょうは おおきいです。＿＿、にぎやかです。[và / and]|そして|が|から|と|そして nối hai ý xuôi nghĩa (to VÀ náo nhiệt).|そして joins two ideas in the same direction (big AND lively).",
"なっとうは＿＿ おいしくないです。[không ~ lắm / not very]|あまり|とても|ずっと|いちばん|あまり luôn đi với phủ định: あまり おいしくないです.|あまり always goes with a negative: あまり おいしくないです.",
"ベトナムは ５がつ、＿＿。[nóng / is hot]|あついです|あつなです|あつくです|あついなです|Aい làm vị ngữ: あつい + です.|An Aい as predicate: あつい + です."]},
{l:"Bài 5",t:["Thì của động từ, どこか / なにか & それから", "Verb tenses, どこか / なにか & それから"],r:["Hiện tại / tương lai: V ます / V ません. Quá khứ: V ました / V ませんでした. Từ chỉ thời gian + の + ngày / giờ (せんしゅうの 土曜日). 今晩 không đi với に. どこか(へ) / なにか(を) V ましたか; trả lời \"Không\": どこも / なにも V ませんでした. それから = sau đó.", "Present / future: V ます / V ません. Past: V ました / V ませんでした. Time word + の + day / hour (せんしゅうの 土曜日). 今晩 does not take に. どこか(へ) / なにか(を) V ましたか; answer \"No\": どこも / なにも V ませんでした. それから = and then."],q:[
"きのう 私は 銀行へ いき＿＿。[đã không đi / did not go]|ませんでした|ません|ました|なかったです|Phủ định quá khứ lịch sự: ませんでした.|Polite negative past: ませんでした.",
"きのう、サッカーを しました。＿＿、シャワーを あびました。[sau đó / and then]|それから|が|から|と|それから nối hai hành động theo thứ tự thời gian.|それから links two actions in time order.",
"A: きのう、＿＿ へ いきましたか。 B: いいえ、どこも いきませんでした。[đâu đó / somewhere]|どこか|どこも|なにか|だれか|どこか = đâu đó; どこも cần động từ phủ định.|どこか = somewhere; どこも needs a negative verb.",
"A: けさ、なにか たべましたか。 B: いいえ、＿＿ たべませんでした。[không ... gì cả / nothing at all]|なにも|なにか|どこも|なにを|なにも + phủ định = không ... gì cả.|なにも + negative = nothing at all."]},
{l:"Bài 5",t:["Tính từ ở thì quá khứ", "Adjectives in the past tense"],r:["Aい: ~い → ~かったです; ~くないです → ~くなかったです (いい → よかったです / よくなかったです). Aな và danh từ: ~です → ~でした; ~ではありません → ~ではありませんでした.", "Aい: ~い → ~かったです; ~くないです → ~くなかったです (いい → よかったです / よくなかったです). Aな and nouns: ~です → ~でした; ~ではありません → ~ではありませんでした."],q:[
"せんしゅうの りょこうは とても＿＿。[vui / was fun]|たのしかったです|たのしいでした|たのしでした|たのしくなかったです|Aい quá khứ: bỏ い và thêm かったです.|Aい past: drop い and add かったです.",
"おとといの パーティーは あまり ひとが おおく＿＿。[không đông lắm / was not very crowded]|なかったです|ないでした|ませんでした|でした|Aい phủ định quá khứ: ~くなかったです.|Aい negative past: ~くなかったです.",
"せんげつは たいへん ひま＿＿。[rảnh / was free]|でした|かったです|くなかったです|です|Aな quá khứ: gốc + でした. ひま là Aな.|Aな past: stem + でした. ひま is an Aな.",
"きのうは てんきが＿＿。[tốt / was good]|よかったです|いかったです|いいでした|よくなかったです|いい chia từ よい nên quá khứ là よかったです.|いい conjugates from よい, so the past is よかったです."]},
{l:"Bài 5",t:["Nêu lý do ~から & どうして", "Giving reasons: ~から & どうして"],r:["Mệnh đề lý do + から、mệnh đề kết quả (ここの ビールが やすいですから、まいばん のみます). Hỏi lý do: どうして ~ですか → ~から.", "Reason clause + から, result clause (ここの ビールが やすいですから、まいばん のみます). Ask for a reason: どうして ~ですか → ~から."],q:[
"ここの ビールが やすい＿＿、まいばん のみます。[vì / because]|ですから|ですが|ですまで|ですより|から đặt sau mệnh đề nêu lý do: やすいですから.|から goes after the reason clause: やすいですから.",
"＿＿ ねむいですか。 ― きのう ねませんでしたから。[tại sao / why]|どうして|どこ|だれ|いつ|Câu trả lời ~から nêu lý do nên từ hỏi là どうして.|The answer ~から gives a reason, so the question word is どうして.",
"どうして ビールを のみませんか。 ― ＿＿から。[vì tôi ghét / because I dislike it]|きらいです|すきです|ほしいです|ひまです|きらいです + から = \"vì tôi ghét\".|きらいです + から = \"because I dislike it\".",
"あしたは やすみ＿＿、こんばん えいがを みます。[vì ngày mai nghỉ / because tomorrow is a day off]|ですから|ですが|でした|まで|から nêu lý do: やすみですから.|から gives the reason: やすみですから."]},
{l:"Bài 5",t:["Thích, muốn & đi để làm gì", "Likes, wants & going in order to do something"],r:["N が すき / きらい / ほしい です (ほしい → ほしくないです). V ます (bỏ ます) + たいです: たい chia như Aい. N へ [N を V / V ます (bỏ ます)] に いきます / きます / かえります.", "N が すき / きらい / ほしい です (ほしい → ほしくないです). V ます (drop ます) + たいです: たい conjugates like an Aい. N へ [N を V / V stem] に いきます / きます / かえります."],q:[
"私は にほんりょうりが＿＿。[thích / like]|すきです|すきなです|すきをです|すきにです|Thích / ghét dùng が: N が すきです.|Likes and dislikes take が: N が すきです.",
"私は あたらしい いえが＿＿。[muốn có / want]|ほしいです|ほしです|ほしたいです|ほしいたいです|ほしい là Aい: N が ほしいです.|ほしい is an Aい: N が ほしいです.",
"にほんごを べんきょう＿＿。[muốn học / want to study]|したいです|ますたいです|しますたいです|したです|Bỏ ます + たいです: べんきょうし + たいです.|Drop ます + たいです: べんきょうし + たいです.",
"らいしゅう ホーチミンしへ あそび＿＿ いきます。[để chơi / in order to play]|に|で|を|が|V (bỏ ます) + に いきます = đi để làm V.|V stem + に いきます = go in order to do V."]},
{l:"Bài 6",t:["Rủ rê, đồng ý, từ chối & sự kiện", "Invitations, accepting, declining & events"],r:["いっしょに V ませんか = rủ làm cùng. Đồng ý: いいですね + V ましょう. Từ chối lịch sự: すみません、ちょっと… (+ lý do ~から). 【Place】で N が あります = có sự kiện / buổi ~ tại địa điểm (あした 会社で 会議が あります).", "いっしょに V ませんか = inviting. Accept: いいですね + V ましょう. Polite refusal: すみません、ちょっと… (+ reason ~から). 【Place】で N が あります = an event takes place at a location (あした 会社で 会議が あります)."],q:[
"いっしょに えいがを みません＿＿。[rủ rê / inviting]|か|ね|よ|を|V ませんか là mẫu rủ rê. か tạo câu hỏi.|V ませんか is the invitation pattern. か makes it a question.",
"A: いっしょに カラオケに いきませんか。 B: いいですね。いき＿＿。[đồng ý / accepting]|ましょう|ません|ました|たいです|V ましょう kêu gọi cùng làm.|V ましょう is the \"let's\" form.",
"A: あした いっしょに かいものに いきませんか。 B: すみません、あしたは＿＿…。いそがしいですから。[từ chối lịch sự / polite refusal]|ちょっと|とても|あまり|いちばん|すみません、ちょっと… là cách từ chối lịch sự.|すみません、ちょっと… is a polite refusal.",
"あした 会社＿＿ かいぎが あります。[tại / at]|で|に|を|と|Sự kiện diễn ra tại địa điểm đánh dấu bằng で.|An event takes place at a location marked by で."]},
{l:"Bài 6",t:["Trợ số từ (助数詞)", "Counters (助数詞)"],r:["Số từ + trợ số từ để chỉ chủng loại: ~まい (枚) = vật mỏng, phẳng (vé, tem, bưu thiếp); ~ほん/ぽん (本) = vật dài (ô, chai); ~さつ (冊) = sách, tạp chí, từ điển; ~つ (ひとつ, ふたつ, みっつ, よっつ, いつつ) = đếm chung. Hỏi: なんまい, なんぼん. Mẫu: N を số lượng + V (チケットを 2まい かいました).", "Number + counter shows the type of object: ~まい (枚) = thin, flat things (tickets, stamps, postcards); ~ほん/ぽん (本) = long things (umbrellas, bottles); ~さつ (冊) = books, magazines, dictionaries; ~つ (ひとつ, ふたつ, みっつ, よっつ, いつつ) = general counting. Ask: なんまい, なんぼん. Pattern: N を quantity + V (チケットを 2まい かいました)."],q:[
"チケットを ２＿＿ かいました。[2 tấm vé / 2 tickets]|まい|ほん|さつ|ふん|枚 (まい) dùng cho vật mỏng, phẳng như vé, tem.|枚 (まい) counts thin, flat things such as tickets and stamps.",
"あそこに かさが ５＿＿ あります。[5 cái ô / 5 umbrellas]|ほん|まい|さつ|ふん|本 (ほん / ぽん) dùng cho vật dài như ô, chai.|本 (ほん / ぽん) counts long things such as umbrellas and bottles.",
"せんせいは じしょが ２＿＿ あります。[2 quyển từ điển / 2 dictionaries]|さつ|ほん|まい|ふん|冊 (さつ) dùng cho sách, tạp chí, từ điển.|冊 (さつ) counts books, magazines and dictionaries.",
"ケーキを 五＿＿ かいます。[5 cái bánh / 5 cakes]|つ|まい|ほん|さつ|Đếm chung: ひとつ, ふたつ, みっつ, よっつ, いつつ (五つ).|General counting: ひとつ, ふたつ, みっつ, よっつ, いつつ (五つ)."]},
{l:"Bài 6",t:["So sánh hơn & so sánh nhất", "Comparative & superlative"],r:["N1 は N2 より A です (より đặt ngay sau đối tượng bị đem ra so sánh); mức độ: ちょっと / すこし = một chút, ずっと = hơn hẳn. Hỏi hai đối tượng: N と N と どちらが A ですか → N の ほうが A です / どちらも A です. So sánh nhất: phạm vi で なに / どこ / いつ / だれ が いちばん A ですか.", "N1 は N2 より A です (より goes right after the thing compared against); degree: ちょっと / すこし = a little, ずっと = far more. Two items: N と N と どちらが A ですか → N の ほうが A です / どちらも A です. Superlative: range で なに / どこ / いつ / だれ が いちばん A ですか."],q:[
"えいごは にほんご＿＿ かんたんです。[dễ hơn / easier than]|より|から|まで|ほど|N1 は N2 より A = N1 A hơn N2.|N1 は N2 より A = N1 is more A than N2.",
"しんかんせんと ひこうきと＿＿が はやいですか。[cái nào / which]|どちら|どれ|だれ|いつ|So sánh hai đối tượng thì hỏi bằng どちら.|When comparing two items, ask with どちら.",
"ひこうきの＿＿が はやいです。[phía ~ hơn / the ~ side is]|ほう|いちばん|より|ほし|N の ほうが = \"bên N hơn\".|N の ほうが = \"the N side is more ...\".",
"スポーツで なにが＿＿ すきですか。[nhất / most]|いちばん|とても|あまり|ちょっと|いちばん = nhất. とても nghĩa là \"rất\".|いちばん = the most. とても means \"very\"."]},
{l:"Bài 6",t:["もう / まだ, どうですか & ね / よ", "もう / まだ, どうですか & ね / よ"],r:["もう V ましたか → はい、もう V ました / いいえ、まだです. もう + N / A hiện tại = \"đã ~ rồi\" (もう 9じです). まだ あります = vẫn còn; もう ありません = đã hết. どうですか = hỏi cảm nhận / đề xuất. ね = xin đồng tình, xác nhận; よ = thông tin mới, nhấn mạnh.", "もう V ましたか → はい、もう V ました / いいえ、まだです. もう + N / A (present) = \"already\" (もう 9じです). まだ あります = still have; もう ありません = no more. どうですか = asking for an impression / suggesting. ね = seeking agreement, confirming; よ = new info, emphasis."],q:[
"もう しゅくだいを しましたか。 ― いいえ、＿＿です。[chưa / not yet]|まだ|もう|いつも|あまり|\"Chưa\" = いいえ、まだです.|\"Not yet\" = いいえ、まだです.",
"もう くすりを のみましたか。 ― はい、＿＿ のみました。[đã ~ rồi / already]|もう|まだ|いつも|あまり|はい、もう V ました = \"Vâng, tôi đã làm rồi\".|はい、もう V ました = \"Yes, I already did\".",
"やさいは＿＿ ありますか。 ― いいえ、もう ありません。[vẫn còn / still]|まだ|もう|いつも|あまり|まだ あります = vẫn còn; もう ありません = đã hết.|まだ あります = still have; もう ありません = none left.",
"もう 12じです＿＿。[12 giờ rồi nhỉ (xin đồng tình) / It's already 12, isn't it (seeking agreement)]|ね|よ|か|が|ね kêu gọi sự đồng tình; よ đưa thông tin mới.|ね seeks agreement; よ gives new information.",
"A: にほんりょうりは＿＿ですか。 B: いいですね。そうしましょう。[thế nào (đề xuất) / how about (suggesting)]|どう|どこ|なに|だれ|どうですか dùng để đề xuất hoặc hỏi cảm nhận.|どうですか is used to suggest something or ask for an impression."]},
{l:"Bài 7",t:["あります / います & từ chỉ vị trí", "あります / います & position words"],r:["N が あります (đồ vật) / N が います (người, động vật). (1) ～に ～が あります / います: nhấn mạnh vị trí (ロビーに テレビが あります). (2) ～は ～に あります / います: nhấn mạnh đối tượng (テレビは ロビーに あります). N の + うえ・した・なか・そと・まえ・うしろ・そば・となり・ひだり・みぎ・ちかく・あいだ. Liệt kê: と (đầy đủ), や … など (ví dụ, còn nữa).", "N が あります (things) / N が います (people, animals). (1) ～に ～が あります / います: stresses the location (ロビーに テレビが あります). (2) ～は ～に あります / います: stresses the subject (テレビは ロビーに あります). N の + うえ・した・なか・そと・まえ・うしろ・そば・となり・ひだり・みぎ・ちかく・あいだ. Listing: と (complete), や … など (examples, and more)."],q:[
"木の したに いぬが＿＿。[có (con chó) / there is (a dog)]|います|あります|いりません|いません|Sinh vật sống dùng います.|Living things use います.",
"かばんの なかに さいふが＿＿。[có (cái ví) / there is (a wallet)]|あります|います|いません|いりません|Đồ vật vô tri dùng あります.|Inanimate objects use あります.",
"テレビは ロビー＿＿ あります。[trợ từ chỉ vị trí / location particle]|に|で|を|と|Vị trí tồn tại: に + あります / います.|Location of existence: に + あります / います.",
"ぼうしは いすの＿＿に あります。[phía sau / behind]|うしろ|まえ|うえ|なか|うしろ = phía sau. まえ = phía trước.|うしろ = behind. まえ = in front."]},
{l:"Bài 7",t:["Nhóm động từ & thể て", "Verb groups & the て-form"],r:["Nhóm 1: chữ trước ます thuộc hàng い (い, ち, り, き, ぎ, し, み, び, に). Nhóm 2: hàng え (たべます, あけます) + một số ngoại lệ (みます, ねます, おきます, あびます, かります). Nhóm 3: きます, します, N + します. Thể て: い・ち・り → って; に・み・び → んで; き → いて (ngoại lệ: いきます → いって); ぎ → いで; し → して. Nhóm 2: bỏ ます + て. Nhóm 3: きて, して.", "Group 1: the syllable before ます is in the い-row (い, ち, り, き, ぎ, し, み, び, に). Group 2: え-row (たべます, あけます) + some exceptions (みます, ねます, おきます, あびます, かります). Group 3: きます, します, N + します. て-form: い・ち・り → って; に・み・び → んで; き → いて (exception: いきます → いって); ぎ → いで; し → して. Group 2: drop ます + て. Group 3: きて, して."],q:[
"かいます → ＿＿[thể て / て-form]|かって|かいて|かんで|かいで|Đuôi い・ち・り chuyển thành って.|Endings い・ち・り become って.",
"のみます → ＿＿[thể て / て-form]|のんで|のいて|のって|のみて|Đuôi に・み・び chuyển thành んで.|Endings に・み・び become んで.",
"かきます → ＿＿[thể て / て-form]|かいて|かいで|かって|かんで|き chuyển thành いて. ぎ chuyển thành いで.|き becomes いて. ぎ becomes いで.",
"いきます → ＿＿[thể て (bất quy tắc) / て-form (irregular)]|いって|いいて|いきて|いんで|いきます là ngoại lệ: いって, không phải いいて.|いきます is the exception: いって, not いいて.",
"かります → ＿＿[thể て (nhóm 2) / て-form (group 2)]|かりて|かって|かんで|かいて|かります (mượn) thuộc nhóm 2: bỏ ます + て = かりて.|かります (to borrow) is group 2: drop ます + て = かりて."]},
{l:"Bài 7",t:["V て ください & V て います", "V て ください & V て います"],r:["V て ください = xin hãy V (なまえを かいて ください). V て います = đang V (いま、ごはんを たべて います); V て いません = đang không V. Hỏi: なにを して いますか → なにも して いません.", "V て ください = please do V (なまえを かいて ください). V て います = is doing V (いま、ごはんを たべて います); V て いません = is not doing V. Ask: なにを して いますか → なにも して いません."],q:[
"なまえを かいて＿＿。[xin hãy viết / please write]|ください|います|ましょう|ませんか|V て + ください = xin hãy V.|V て + ください = please do V.",
"いま、ともだちに でんわして＿＿。[đang gọi điện / is calling]|います|ください|ません|ました|V て います = đang V.|V て います = is doing V.",
"A: あなたは なにを して いますか。 B: ＿＿ して いません。[không làm gì cả / nothing]|なにも|なにか|どこも|どこか|なにも + phủ định = không ... gì cả.|なにも + negative = nothing at all.",
"あした ９じに＿＿ ください。[xin hãy đến / please come]|きて|きいて|きって|くて|きます → きて (nhóm 3).|きます → きて (group 3)."]},
{l:"Bài 7",t:["V-かた, わかります & どのN / どれ", "V-かた, わかります & どのN / どれ"],r:["V ます (bỏ ます) + かた = cách làm (よみかた, かきかた, つかいかた). N が わかります / わかりません (thứ được hiểu đánh dấu bằng が). どのN: đi kèm danh từ (どの おさらですか); どれ: dùng một mình, không có danh từ theo sau (どれですか).", "V ます (drop ます) + かた = way of doing (よみかた, かきかた, つかいかた). N が わかります / わかりません (the thing understood is marked by が). どのN goes with a noun (どの おさらですか); どれ stands alone with no noun after it (どれですか)."],q:[
"よみます → \"cách đọc\": よみ＿＿[cách làm / way of doing]|かた|ます|て|たい|Bỏ ます và thêm かた.|Drop ます and add かた.",
"わたしは えいご＿＿ わかります。[hiểu / understand]|が|を|に|で|わかります / わかりません đánh dấu thứ được hiểu bằng が.|わかります / わかりません mark the thing understood with が.",
"おさらを とって ください。 ― ＿＿ おさらですか。[cái đĩa nào / which plate]|どの|どれ|どこ|だれ|どの đi kèm danh từ: どの おさら.|どの goes with a noun: どの おさら.",
"しおを とって ください。 ― ＿＿ですか。[cái nào / which one]|どれ|どの|どこ|だれ|どれ dùng một mình, không có danh từ theo sau.|どれ stands alone, with no noun after it."]},
{l:"Bài 7",t:["V ましょうか & ませんか / ましょう / ましょうか", "V ましょうか & ませんか / ましょう / ましょうか"],r:["V ましょうか = \"Để tôi V (giúp) nhé?\". Đáp: đồng ý ええ / すみません、おねがいします; từ chối いいえ、けっこうです / いいえ、だいじょうぶです. So sánh: V ませんか = rủ rê, hỏi ý đối phương; V ましょう = kêu gọi cùng làm một cách chủ động; V ましょうか = đề nghị giúp đỡ.", "V ましょうか = \"Shall I do V (for you)?\". Reply: accept ええ / すみません、おねがいします; decline いいえ、けっこうです / いいえ、だいじょうぶです. Comparison: V ませんか = inviting, asking the other's wish; V ましょう = actively urging \"let's\"; V ましょうか = offering help."],q:[
"せんせい、にもつを もち＿＿。[để em xách giúp nhé / shall I carry it]|ましょうか|ましょう|ませんか|ます|V ましょうか = đề nghị giúp đỡ.|V ましょうか = offering help.",
"A: てつだいましょうか。 B: ええ、すみません、＿＿。[nhờ giúp / please do]|おねがいします|けっこうです|だいじょうぶです|ざんねんです|おねがいします dùng để nhận lời đề nghị giúp đỡ.|おねがいします accepts an offer of help.",
"A: かさを かしましょうか。 B: いいえ、＿＿。[từ chối / declining]|けっこうです|おねがいします|いいですね|ざんねんです|いいえ、けっこうです / だいじょうぶです dùng để từ chối.|いいえ、けっこうです / だいじょうぶです declines the offer.",
"いっしょに えいがを みに いき＿＿。[cùng đi đi (kêu gọi) / let's go]|ましょう|ました|ません|ましたか|V ましょう kêu gọi cùng làm một cách chủ động.|V ましょう actively urges \"let's do it\"."]},
{l:"Bài 7",t:["Hỏi chủ thể だれが / なにが & まだ / もう", "Asking the subject だれが / なにが & まだ / もう"],r:["Từ hỏi + が hỏi chủ thể của câu: だれが (ai), なにが (cái gì), どこが (chỗ nào), いつが (khi nào); trả lời bằng đúng thành phần đó (せんせいが いきません). お金が まだ あります = vẫn còn tiền; お金が まだ ありません = vẫn chưa có tiền; お金が もう ありません = đã hết tiền rồi.", "Question word + が asks for the subject: だれが (who), なにが (what), どこが (which place), いつが (when); answer with exactly that element (せんせいが いきません). お金が まだ あります = still have money; お金が まだ ありません = do not have money yet; お金が もう ありません = no money left."],q:[
"＿＿が お客さんと はなして いますか。 ― キムさんです。[ai / who]|だれ|なに|どこ|いつ|だれが hỏi chủ thể là người.|だれが asks for a person as the subject.",
"A: ＿＿が ありますか。 B: ケーキが あります。[cái gì / what]|なに|だれ|どこ|いつ|なにが hỏi chủ thể là vật.|なにが asks for a thing as the subject.",
"おかねが＿＿ ありません。[đã hết tiền rồi / no money left]|もう|まだ|いつも|よく|もう ありません = đã hết rồi.|もう ありません = none left.",
"おかねが＿＿ ありません。[vẫn chưa có tiền / do not have money yet]|まだ|もう|いつも|よく|まだ ありません = vẫn chưa có.|まだ ありません = still do not have."]}
];

const SPK=[[1, 0, "こんにちは！私はさとうです。おおさか大学のせんせいです。私のたんじょうびは4がつ5日です。しゅみはサッカーです。まいにちサッカーをします。ときどきこうえんにいって、ともだちといっしょにサッカーをします。しごとはいそがしいですが、たのしいです。"], [2, 0, "おはようございます！こちらはリーさんです。リーさんはちゅうごく人です。かれのしゅみはおんがくです。 今、京都たんき大学の学生です。学校で日本語をべんきょうしています。ひまなときにはともだちとカラオケにいきます。"], [3, 3, "日曜日、ともだちとちかくの山にのぼりました。てんきがよかったですから、とてもきもちがよかったです。山でおべんとうを食べました。山からのけしきはとてもきれいでした。それから、古いお寺を見に行きました。とてもおもしろかったです。とてもたのしい1日でした。また行きたいです。"], [4, 1, "わたしのまちはしずかです。ふるいおてらがおおいです。きれいなかわがあります。たかいやまもあります。しずかです。ここはちいさいですが、いいです。"], [5, 2, "私はベトナムのダナンからきました。ダナンはベトナムのまんなかです。ダナンはちいさいですが、とてもにぎやかなところです。ふるいお寺やびじゅつかんなどがあります。お寺はとてもきれいです。8月に花火のまつりがあります。いろいろな国の花火があります。とてもきれいです。ダナンはなつ、あついです。そして、あめがおおいです。ダナンはいいところです。みなさん、ぜひきてください。"], [6, 2, "パクさんは かんこくじんです。今年 は 21才です。さくら 日本語 学校の 学生です。うちは かんこくのソウルです。ソウルは かんこくの にしです。東京から ソウルまでひこうき で 2時間 ぐらいです。ソウルは にぎやかです。そして おおきいまちです。ソウルは 12月、さむいです。ゆきが おおいです。ふゆになったら トッポッキ をたべます。とてもおいしいですが、からいです。"], [7, 2, "日曜日、ともだちと ちかくのやまにのぼりました。てんきがよかったですから、とてもきもちがよかったです。やまで、おべんとうをたべました。やまからの けしきがとてもきれいでした。それから、ふるいお寺を見に行きました。とてもおもしろかったです。とてもたのしい1日でした。また行きたいです。"], [8, 2, "私はメアリです。私は イタリアのフィレンツェから来ました。フィレンツェはイタリアのすこし きたです。フィレンツェは とても にぎやかなところです。ふるいきょうかいやびじゅつかんなどがあります。きょうかいはとてもきれいです。2月にチョコレートのまつりがあります。いろいろな チョコレートがあります。とてもおいしいです。フィレンツェははる、あたたかいです。そして、雨がすくないです。フィレンツェは いいところです。"], [9, 2, "すみません、ちょっときいてください。あそこにとけいがみえますか。ええ、みえます。あれは私のとけいです。でも、今は時間がわかりません。とけいがこわれています。新しいとけいを買いに行きます。"], [10, 4, "今日は雨ですが、うちで本を読みます。きのうはいいてんきでした。きのうはこうえんでテニスをしました。テニスはとてもたのしかったです。あしたはともだちとえいがを見ます。おもしろいえいががいいです。来週は日本へ行きます。日本の食べ物はおいしいです。すしがだいすきです。すしはせかいでいちばんおいしいです。日本では、たくさんのすしをたべたいです。それから、京都にもいきたいです。京都は日本の古いまちです。きれいなまちだとおもいます。日本りょこうがたのしみです。"], [11, 5, "私はミンです。ベトナムのハノイから 来ました。ハノイはベトナムのきたです。とても しずかな ところです。ふるい お寺や びじゅつかん などが あります。お寺は とてもきれいです。ハノイは ふゆ、すこし さむいです。あめが あまり おおくないです。ハノイは いいところです。"], [12, 5, "私は パクです。私の まちは かんこくのソウルです。ソウルは おおきい まちです。そして、いい ところです。ソウルに おおきい かわが あります。かわは とても きれいです。ソウルは ふゆ、とても さむいです。みなさん、かんこくへ来てください。"], [13, 5, "メアリーさんは イタリア人です。38才です。さくら 学校の 先生です。うちは イタリアの ナポリです。ナポリは イタリアの みなみです。東京から ローマまで ひこうきで 12時間半くらいです。ローマから ナポリまで バスで 3時間です。ナポリは とても きれいです。そして しずかです。 てんきが いいです。"], [14, 5, "私のまちは きれいです。ふるいお寺 や びじゅつかん などが あります。なつに メロンの ジュースを のみます。 すこし あまいですが、とても おいしいです。そして つめたいです。食べ物もおいしいです。皆さん、ぜひ、来てください。"], [15, 5, "しゅうまつ、てんきが よかったです。私は こうえんへ いきました。ともだちに 会いました。さくらを 見ました。きれいでした。それから、インドの レストランで 食事しました。とても おいしかったです。よる、デパートへ 行きました。何も 買いませんでした。たかかったですから。たのしい 一日 でした。"], [16, 5, "先週の日よう日、ともだちとやまにのぼりました。てんきがよかったですから、とてもきもちがよかったです。やまでおべんとうを食べました。 ここの けしきは とてもきれいでした。それから、ふるいきょうかいを見に行きました。とてもおもしろかったです。とてもたのしい一日でした。また行きたいです。"], [17, 5, "先週の土曜日、私はこうえんでバーベキューをしました。それから、たかいやまにのぼりました。ここのけしきはとてもきれいでした。とてもおもしろかったです。とてもたのしい一日でした。また 行きたいです。"], [18, 5, "土曜日、ともだちと うみへ 行きました。 てんきが よかったですから、とても きもちが よかったです。 うみで ビールを 飲みました。バーベキューを しました。けしきは とても きれいでした。 それから、ふるい きょうかいを見に 行きました。とても おもしろかったです。 たのしい 1日でした。 また 行きたいです。"], [19, 5, "私は スポーツが すきです。テニスと すいえいを します。サッカーは しません。にちようび かぞくと テニスを します。とても たのしいです。それから、プールへ いきます。まいにち テニスと すいえいを したいです。"], [20, 5, "日曜日 ともだち のうちへ 行きました。そこで ゲームを しました。コーヒーを 飲みました。とても たのしかったです。それから、日本の レストランで 食事しました。とても おいしかったですが、たかかったです。よる、デパートへ 買い物に 行きました。 デパートで ともだちと しゃしんを とりました。"], [21, 5, "私は スポーツが すきです。テニスと すいえいを します。サッカーは しません。 テニスは 土曜日に かぞくと します。そして ときどき プールに 行きます。かわで およぎます。私は 今 とても たのしいです。げんきです。 テニスと すいえいを したいです。"], [22, 5, "今週の土曜日の午後はいそがしいですか。 わたしの国の たいしかんで パーティーがあります。 いっしょに行きませんか。 木曜日の あさまでに へんじをください。"], [23, 5, "みなさんは 日本の 食べ物で 何が いちばん すきですか。 私は おこのみやきが いちばん すきです。 おこのみやきは 日本のピザです。 おこのみやきの なかに ぶたにく や たまご や やさいが あります。 おこのみやきの ソースは すこし あまいです。 とても おいしいですよ。 こんど いっしょに おこのみやきを 食べに 行きませんか。"], [24, 5, "私は あさ 時間が ありません。えきで パンを 買って 食べます。ひるごはんも しごとが いそがしいですから、 パンと ぎゅうにゅうです。ばんごはんは、うちのちかくの レストランで ゆっくり ごはんを 食べます。"], [25, 5, "メアリーさんは 会社いんです。 東京に います。毎日、7時に おきます。8時に 会社へ 行きます。午後5時まで しごとを します。よる 9時ごろ うちへ 帰ります。ばんごはんを 食べます。テレビを 見ます。それから、インターネットをして、でんわで こいびとと 話します。11時ごろ ねます。"], [26, 5, "私は ダニエルです。かぞくは 4人です。あに は 会社いんです。ちちは 大学で おしえています。はは は びょういんで はたらいています。私は ひろしま 大学の1年生です。"], [27, 5, "きのうの あさ 私は 一人で としょかんへ 行きました。それから、スーパーで 買いものを しました。午後、ともだちの すずきさんに 会いました。ゆうがた、うちへ 帰りました。そして、えいごを べんきょうしました。"], [28, 5, "みなさん、来週の日曜日、私のうちで パーティーをします。私は国の 料理を つくります。 いっしょに つくりませんか。 それから、みなさんの国の 料理を つくって、いっしょに 食べましょう。おいしい おさけも 飲みましょう。 私のアパートは えきの ちかくに あります。 コンビニの となりの あたらしい アパートです。 ぜひ、来てください。"], [29, 5, "きのう、キムさんと デパートで 買いものを しました。 4かいへ 行きました。シャツを 見ました。ふくやに シャツが たくさん ありました。キムさんは 小さいシャツを 買いました。私は 大きいシャツを 買いました。それから、時間が ありましたから、1かいで えいがを 見ました。帰りました。"], [30, 5, "田中さんの おとうさんは ごはんと みそしるが すきです。パンは あまり すきじゃありません。 田中さんの おかあさんも ごはんと みそしるが すきです。パンも よく 食べます。おかあさんは たまごは あまり 食べません。 田中さんは いつも ごはんと 肉を 食べます。貝も すきです。パンは あまり 食べません。 くだものも すきじゃありません。"], [31, 5, "私は 大学のとき、日本の えいがを フランス語で 見ました。とても、おもしろかったです。 日本の おもしろいことを たくさん 見たいですから、 日本へ来ました。今、日本語を べんきょうしています。"], [32, 5, "私は ベトナムのハノイから きました。ハノイは ベトナムのきたです。とても きれいです。ふるいお寺や びじゅつかんが あります。おいしい食べ物が おおいです。なつ、てんきが いいです。そして、あめが すくないです。こうえんで バーベキューをします。ハノイは いいところです。なつやすみ、ハノイへ帰りたいです。"], [33, 5, "しゅうまつ、ひまでした。私は ともだちと えいがを 見に行きました。おもしろいえいがでした。それから、ちゅうごくのレストランで ひるごはんを 食べました。おいしかったです。レストランで 大学の先生に 会いました。先生は かぞくと ごはんを 食べました。よる、へやを そうじしました。それから、せんたくしました。"], [34, 5, "私のまちは にぎやかです。たかい ビルがおおいです。きょうかいも あります。とても きれいです。まちは はる、すずしいです。おはなみに行きます。あきにおまつりを見ます。とても おもしろいです。みなさん、ぜひ来てください。"], [35, 5, "今日 小学校の後ろで 田中先生に 会いました。本田さんも来ました。お寺の見学について たくさん話しました。それから、5時半に 帰りました。 野菜をきって、料理をつくって、一人で 食べました。"]];

const ROM={1:"こんにちは/konnichiwa|！/|私は/watashi wa|さとうです/satō desu|。/|おおさか/Ōsaka|大学の/daigaku no|せんせいです/sensei desu|。/|私の/watashi no|たんじょうびは/tanjōbi wa|4がつ5日です/shigatsu itsuka desu|。/|しゅみは/shumi wa|サッカーです/sakkā desu|。/|まいにち/mainichi|サッカーを/sakkā o|します/shimasu|。/|ときどき/tokidoki|こうえんに/kōen ni|いって/itte|、/|ともだちと/tomodachi to|いっしょに/issho ni|サッカーを/sakkā o|します/shimasu|。/|しごとは/shigoto wa|いそがしいですが/isogashii desu ga|、/|たのしいです/tanoshii desu|。/",2:"おはようございます/ohayō gozaimasu|！/|こちらは/kochira wa|リーさんです/Rī-san desu|。/|リーさんは/Rī-san wa|ちゅうごく人です/chūgokujin desu|。/|かれの/kare no|しゅみは/shumi wa|おんがくです/ongaku desu|。/| 今/ima|、/|京都/Kyōto|たんき大学の/tanki daigaku no|学生です/gakusei desu|。/|学校で/gakkō de|日本語を/nihongo o|べんきょうしています/benkyō shite imasu|。/|ひまなときには/hima na toki ni wa|ともだちと/tomodachi to|カラオケに/karaoke ni|いきます/ikimasu|。/",3:"日曜日/nichiyōbi|、/|ともだちと/tomodachi to|ちかくの/chikaku no|山に/yama ni|のぼりました/noborimashita|。/|てんきが/tenki ga|よかったですから/yokatta desu kara|、/|とても/totemo|きもちが/kimochi ga|よかったです/yokatta desu|。/|山で/yama de|おべんとうを/obentō o|食べました/tabemashita|。/|山からの/yama kara no|けしきは/keshiki wa|とても/totemo|きれいでした/kirei deshita|。/|それから/sorekara|、/|古い/furui|お寺を/otera o|見に/mi ni|行きました/ikimashita|。/|とても/totemo|おもしろかったです/omoshirokatta desu|。/|とても/totemo|たのしい/tanoshii|1日でした/ichinichi deshita|。/|また/mata|行きたいです/ikitai desu|。/",4:"わたしの/watashi no|まちは/machi wa|しずかです/shizuka desu|。/|ふるい/furui|おてらが/otera ga|おおいです/ōi desu|。/|きれいな/kirei na|かわが/kawa ga|あります/arimasu|。/|たかい/takai|やまも/yama mo|あります/arimasu|。/|しずかです/shizuka desu|。/|ここは/koko wa|ちいさいですが/chiisai desu ga|、/|いいです/ii desu|。/",7:"日曜日/nichiyōbi|、/|ともだちと /tomodachi to|ちかくの/chikaku no|やまに/yama ni|のぼりました/noborimashita|。/|てんきが/tenki ga|よかったですから/yokatta desu kara|、/|とても/totemo|きもちが/kimochi ga|よかったです/yokatta desu|。/|やまで/yama de|、/|おべんとうを/obentō o|たべました/tabemashita|。/|やまからの /yama kara no|けしきが/keshiki ga|とても/totemo|きれいでした/kirei deshita|。/|それから/sorekara|、/|ふるい/furui|お寺を/otera o|見に/mi ni|行きました/ikimashita|。/|とても/totemo|おもしろかったです/omoshirokatta desu|。/|とても/totemo|たのしい/tanoshii|1日でした/ichinichi deshita|。/|また/mata|行きたいです/ikitai desu|。/",9:"すみません/sumimasen|、/|ちょっと/chotto|きいてください/kiite kudasai|。/|あそこに/asoko ni|とけいが/tokei ga|みえますか/miemasu ka|。/|ええ/ē|、/|みえます/miemasu|。/|あれは/are wa|私の/watashi no|とけいです/tokei desu|。/|でも/demo|、/|今は/ima wa|時間が/jikan ga|わかりません/wakarimasen|。/|とけいが/tokei ga|こわれています/kowarete imasu|。/|新しい/atarashii|とけいを/tokei o|買いに/kai ni|行きます/ikimasu|。/"};

window.JPD_DATA={T,EN,K,D,GR,VI,GN,SPK,ROM};
