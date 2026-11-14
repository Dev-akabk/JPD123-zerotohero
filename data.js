/* JPD123 – dữ liệu (tách từ index.html). Nạp TRƯỚC script xử lý chính. */
const T={A:["Động từ","Verbs"],B:["Tính từ","Adjectives"],C:["Ăn uống","Food & drink"],D:["Đồ vật","Objects"],E:["Địa điểm & phương tiện","Places & transport"],F:["Thời gian","Time"],G:["Con người","People"],H:["Vị trí & phương hướng","Position & direction"],I:["Từ nối & giao tiếp","Connectors & phrases"],J:["Khác","Other"]};

const EN=`think|between|day after tomorrow|tomorrow|wash|on foot|there is (thing); to be at|house|good, nice|dog|put in|need|chair|someday|forever|there is (person/animal); to be at|together|no|now|welcome (to a shop)|above, on|picture|cinema|station|delicious|many, a lot|big|put, place|customer|alcohol, sake|plate|teach, tell|castle|tea|restroom|day before yesterday|stomach|rice ball|bath|lunch box|shop|shopping|ticket gate|write|certainly (polite)|singer|new|not very|sweet|family|way of ~ing|borrow, rent|spicy|river|easy|school|tree|beef|ticket|feeling|yesterday|cut|dislike|pretty, clean|bank|medicine|fruit|car|scenery|healthy, well|police box|coffee|rice, meal|this year|this month|this week|next time|from now on|wallet|fish|sugar|cold (weather)|salt|but|quiet|below, under|bicycle|vending machine|well then|cafeteria|do|weekend|soy sauce|John|like|sukiyaki|amazing|spoon|sports|excuse me, sorry|sour|last month|last week|and, then|all, everything|that's right|outside|about time to|tall, expensive|hard, tough|cigarette|all right, OK|building|who|small|near|map|subway|a little|turn on|workplace, job|plan, intend|hand|table|help|department store|but|electricity, light|train|telephone|microwave|and|toilet|far|where|which, where|which ~|how much, how long|friend|take, pick up, take (a photo)|which one|drive|what kind of|inside|lively, bustling|Japanese food|Japanese language|news|right?|necktie|drink|yes|bus|bus stop|passport|flower|chopsticks|dinner|I was surprised|video|person|art museum|left|free (time)|east|piano|low|one (thing)|two people|winter|fork|clothes|old|room|study|want|mailbox|book|front, before|not yet, still|town, city|straight|again, see you|window|middle, centre|right|green|water|swimsuit|everyone|difficult|already|glasses|hold, carry|take (with you)|hello (phone)|baseball|grill, bake, burn|vegetables|rest, day off|cheap, easy|early evening|famous|beside, side|often, well|next month|next week|next year|cooking, dish|refrigerator|I, me|understand|wow|promise, appointment|mountain|famous|errand, business|if you like`.split('|');

const K=`ひがし=東|Đông
にし=西|Tây
みなみ=南|Nam
きた=北|Bắc
まんなか=真ん中|Chân trung
くるま=車|Xa
でんしゃ=電車|Điện xa
ひこうき=飛行機|Phi hành cơ
しんかんせん=新幹線|Tân cán tuyến
えき=駅|Dịch
まち=町|Đinh
やま=山|Sơn
かわ=川|Xuyên
き=木|Mộc
はな=花|Hoa
ひと=人|Nhân
いえ=家|Gia
いぬ=犬|Khuyển
おしろ=お城|Thành
おてら=お寺|Tự
じんじゃ=神社|Thần xã
おんせん=温泉|Ôn tuyền
ちかてつ=地下鉄|Địa hạ thiết
がっこう=学校|Học hiệu
ぎんこう=銀行|Ngân hàng
いま=今|Kim
きのう=昨日|Tạc nhật
きょう=今日|Kim nhật
あした=明日|Minh nhật
けさ=今朝|Kim triêu
こんばん=今晩|Kim vãn
こんしゅう=今週|Kim chu
せんしゅう=先週|Tiên chu
らいしゅう=来週|Lai chu
こんげつ=今月|Kim nguyệt
せんげつ=先月|Tiên nguyệt
らいげつ=来月|Lai nguyệt
ことし=今年|Kim niên
きょねん=去年|Khứ niên
らいねん=来年|Lai niên
まいにち=毎日|Mỗi nhật
まいしゅう=毎週|Mỗi chu
まいつき=毎月|Mỗi nguyệt
まいとし=毎年|Mỗi niên
ごぜん=午前|Ngọ tiền
ごご=午後|Ngọ hậu
ぜんじつ=前日|Tiền nhật
せんじつ=先日|Tiên nhật
じかん=時間|Thời gian
しゅうまつ=週末|Chu mạt
いちねんじゅう=一年中|Nhất niên trung
ふゆ=冬|Đông
いきます=行きます|Hành
きます=来ます|Lai
かえります=帰ります|Quy
あいます=会います|Hội
みます=見ます|Kiến
たべます=食べます|Thực
のみます=飲みます|Ẩm
かいます=買います|Mãi
かいもの=買い物|Mãi vật
ききます=聞きます|Văn
よみます=読みます|Độc
かきます=書きます|Thư
はなします=話します|Thoại
いいます=言います|Ngôn
やすみます=休みます|Hưu
べんきょう=勉強|Miễn cường
でんわ=電話|Điện thoại
ぎゅうにく=牛肉|Ngưu nhục
りょうり=料理|Liệu lý
やさい=野菜|Dã thái
にほんご=日本語|Nhật Bản ngữ
おおきい=大きい|Đại
ちいさい=小さい|Tiểu
おおい=多い|Đa
あたらしい=新しい|Tân
ふるい=古い|Cổ
たかい=高い|Cao
ひくい=低い|Đê
やすい=安い|An
さむい=寒い|Hàn
すき=好き|Hảo
きらい=嫌い|Hiềm
ゆうめい=有名|Hữu danh
しずか=静か|Tĩnh
げんき=元気|Nguyên khí
ひま=暇|Hạ
ともだち=友達|Hữu đạt
かぞく=家族|Gia tộc
みず=水|Thủy
おちゃ=お茶|Trà
おさけ=お酒|Tửu
さかな=魚|Ngư
ごはん=ご飯|Phạn
ほん=本|Bản
うえ=上|Thượng
した=下|Hạ
なか=中|Trung
そと=外|Ngoại
まえ=前|Tiền
ひだり=左|Tả
みぎ=右|Hữu
とうきょう=東京
なまえ=名前|Danh tiền
くに=国|Quốc
がいこく=外国|Ngoại quốc
おとこのひと=男の人
おんなのひと=女の人
だんじょ=男女
く=区
せんせい=先生
いっしゅうかん=一週間
あとで=後で
ぜんご=前後|Tiền hậu
けんがく=見学|Kiến học
のみみず=飲み水
いんしょく=飲食|Ẩm thực
じんぶつ=人物
けんぶつ=見物
やすみのひ=休みの日
きゅうじつ=休日
らいにち=来日
ひがえり=日帰り
きこく=帰国
のみかい=飲み会
こっかい=国会
かいけん=会見
かいしゃ=会社
しゃかい=社会
しんぶん=新聞|Tân văn
どくしょ=読書|Độc thư
よみもの=読み物
じしょ=辞書|Từ thư
かいわ=会話|Hội thoại
げんご=言語|Ngôn ngữ
ことば=言葉|Ngôn diệp
たんぼ=田んぼ
たなか=田中
すいでん=水田|Thủy điền
ちから=力
すいりょく=水力|Thủy lực
かりょく=火力|Hỏa lực
りょうきん=料金|Liệu kim
はんとし=半年
はんつき=半月
はんにち=半日
はんぶん=半分
じはん=時半
おとな=大人
たいかい=大会
こびと=小人
しょうがっこう=小学校`.split('\n').reduce((o,l)=>{const[a,b]=l.split('=');o[a]=b.replace('|',' – ');return o},{});

const D=`おもいます|Nghĩ rằng|A
あいだ|Ở giữa|H
あさって|Ngày mốt|F
あした|Ngày mai|F
あらいます|Rửa|A
あるいて（歩いて）|Đi bộ|A
あります|Có (đồ vật); ở, tại|A
いえ|Nhà|D
いい|Tốt, được, hay|B
いぬ|Chó|J
いれます|Cho vào|A
いります|Cần|A
いす|Ghế|D
いつか|Khi nào|I
いつまでも|Mãi mãi|I
います|Có; ở, tại (người, động vật)|A
いっしょに|Cùng nhau|I
いいえ|Không|I
いま（今）|Bây giờ|F
いらっしゃいませ|Xin chào quý khách (khi khách vào cửa hàng)|I
うえ|Trên|H
え|Bức tranh|D
えいがかん|Rạp chiếu phim|E
えき|Nhà ga|E
おいしい|Ngon|B
おおい (多い)|Nhiều ~|B
おおきい (大きい)|To, lớn|B
おきます|Để, đặt|A
おきゃくさま|Quý khách, khách hàng|G
おさけ|Rượu|C
おさら|Đĩa|D
おしえます|Dạy, chỉ|A
おしろ|Lâu đài|E
おちゃ|Trà|C
おてあらい|Nhà vệ sinh|E
おととい|Hôm kia|F
おなか|Bụng|G
おにぎり|Cơm nắm|C
おふろ|Bồn tắm|D
おべんとう|Cơm hộp|C
おみせ|Cửa hàng|E
かいもの|Mua sắm|J
かいさつ|Cổng soát vé|E
かきます|Viết|A
かしこまりました|Tôi đã hiểu (lịch sự)|I
かしゅ|Ca sĩ|G
あたらしい|Mới|B
あまり|Không ... lắm|I
あまい|Ngọt|B
かぞく|Gia đình|G
かた|Cách, phương pháp|I
かります|Mượn, thuê|A
からい|Cay|B
かわ|Sông|J
かんたん|Dễ dàng|B
がっこう|Trường học|E
き|Cây|J
ぎゅうにく|Thịt bò|C
きっぷ|Vé|D
きもち|Cảm xúc|I
きのう|Hôm qua|F
きります|Cắt|A
きらい|Ghét|B
きれい|Đẹp, sạch sẽ|B
ぎんこう|Ngân hàng|E
くすり|Thuốc|D
くだもの|Trái cây|C
くるま|Xe hơi|D
けしき|Phong cảnh|J
げんき|Khỏe mạnh|B
こうばん|Đồn cảnh sát|E
コーヒー|Cà phê|C
ごはん|Cơm|C
ことし|Năm nay|F
こんげつ|Tháng này|F
こんしゅう|Tuần này|F
こんど|Lần tới|F
これから|Từ giờ trở đi|I
さいふ|Ví tiền|D
さかな|Cá|C
さとう|Đường|C
さむい|Lạnh|B
しお|Muối|C
しかし|Nhưng|I
しずか|Yên tĩnh|B
した|Dưới|H
じてんしゃ|Xe đạp|D
じどうはんばいき|Máy bán hàng tự động|D
じゃあ|Vậy thì|I
しょくどう|Nhà ăn|E
します|Làm|A
しゅうまつ|Cuối tuần|F
しょうゆ|Xì dầu|C
ジョン|John|G
すき|Thích|B
すきやき|Món lẩu sukiyaki|C
すごい|Tuyệt vời|B
スプーン|Muỗng, thìa|D
スポーツ|Thể thao|J
すみません|Xin lỗi|I
すっぱい|Chua|B
せんげつ|Tháng trước|F
せんしゅう|Tuần trước|F
そして|Và, sau đó|I
ぜんぶ|Toàn bộ, tất cả|I
そうですね|Đúng vậy|I
そと|Bên ngoài|H
そろそろ|Sắp sửa|I
たかい|Cao, đắt|B
たいへん|Khó khăn, vất vả|B
たばこ|Thuốc lá|D
だいじょうぶ|Ổn, không sao|B
たてもの|Tòa nhà|E
だれ|Ai|G
ちいさい|Nhỏ, bé|B
ちかい|Gần|B
ちず|Bản đồ|D
ちかてつ|Tàu điện ngầm|E
ちょっと|Một chút|I
つけます|Bật (thiết bị)|A
つとめ|Công ty|E
つもり|Dự định|I
て|Tay|G
テーブル|Bàn|D
てつだいます|Giúp đỡ|A
デパート|Cửa hàng bách hóa|E
でも|Nhưng|I
でんき|Điện|D
でんしゃ|Xe lửa|E
でんわ|Điện thoại|D
でんしレンジ|Lò vi sóng|D
と|Và|I
トイレ|Nhà vệ sinh|E
とおい|Xa|B
どこ|Ở đâu|I
どちら|Cái nào, nơi nào|I
どの|~ nào|I
どのくらい|Khoảng bao nhiêu, bao lâu|I
ともだち|Bạn bè|G
とります|Lấy, cầm, chụp (ảnh)|A
どれ|Cái nào|I
ドライブ|Lái xe|J
どんな|Như thế nào|I
なか|Bên trong|H
にぎやか|Nhộn nhịp, sôi nổi|B
にほんりょうり|Món ăn Nhật|C
にほんご|Tiếng Nhật|J
ニュース|Tin tức|J
ね|Nhỉ|I
ネクタイ|Cà vạt|D
のみます|Uống|A
はい|Vâng, dạ|I
バス|Xe buýt|E
バスてい|Trạm xe buýt|E
パスポート|Hộ chiếu|D
はな|Hoa|J
はし|Đũa|D
ばんごはん|Bữa tối|C
びっくりしました|Bất ngờ, ngạc nhiên|I
ビデオ|Video|D
ひと|Người|G
びじゅつかん|Bảo tàng mỹ thuật|E
ひだり|Bên trái|H
ひま|Rảnh rỗi|B
ひがし|Phía đông|H
ピアノ|Piano|J
ひくい|Thấp|B
ひとつ|Một cái|I
ふたり|Hai người|G
ふゆ|Mùa đông|F
フォーク|Cái nĩa|D
ふく|Quần áo|D
ふるい|Cũ, cổ xưa|B
へや|Phòng|D
べんきょう|Học tập|A
ほしい|Muốn có|B
ポスト|Hộp thư|D
ほん|Sách|D
まえ|Trước, phía trước|H
まだ|Chưa|I
まち|Thị trấn, thành phố|E
まっすぐ|Thẳng|H
また|Hẹn gặp lại, lần nữa|I
まど|Cửa sổ|D
まんなか|Chính giữa|H
みぎ|Bên phải|H
みどり|Màu xanh lá cây|J
みず|Nước|C
みずぎ|Đồ bơi|D
みんな|Mọi người|G
むずかしい|Khó|B
もう|Đã, rồi|I
メガネ|Kính|D
もちます|Cầm, mang|A
もっていきます|Mang đi|A
もしもし|Alo (khi nói chuyện điện thoại)|I
やきゅう|Bóng chày|J
やきます|Nướng, thiêu đốt|A
やさい|Rau củ|C
やすみ|Nghỉ ngơi|F
やすい|Rẻ, dễ|B
ゆうがた|Chiều tối|F
ゆうめい|Nổi tiếng|B
よこ|Bên cạnh|H
よく|Thường, hay|I
らいげつ|Tháng sau|F
らいしゅう|Tuần sau|F
らいねん|Năm tới|F
りょうり|Nấu ăn|C
れいぞうこ|Tủ lạnh|D
わたし|Tôi|G
わかります|Hiểu|A
わあ|Woa (cảm thán)|I
やくそく|Lời hứa, cuộc hẹn|I
やま|Núi|J
ゆうめい (な)|Nổi tiếng|B
ようじ|Công việc|I
よかったら|Nếu bạn muốn|I
にし|Phía tây|H|west
みなみ|Phía nam|H|south
きた|Phía bắc|H|north
しんかんせん|Tàu siêu tốc shinkansen|E|bullet train
ひこうき|Máy bay|E|airplane
おんせん|Suối nước nóng|J|hot spring
おてら|Chùa|E|temple
じんじゃ|Đền thờ|E|shrine
いきます|Đi|A|go
きます|Đến|A|come
かえります|Về|A|return, go home
あいます|Gặp|A|meet
みます|Xem, nhìn, ngắm|A|look, watch
たべます|Ăn|A|eat
かいます|Mua|A|buy
ききます|Nghe, hỏi|A|listen, ask
よみます|Đọc|A|read
はなします|Nói chuyện|A|talk, speak
つくります|Nấu, làm|A|cook, make
のぼります|Leo (núi)|A|climb
はいります|Vào, bước vào|A|enter
やすみます|Nghỉ|A|rest, take a day off
いいます|Nói|A|say
つかいます|Sử dụng|A|use
だします|Lấy ra|A|take out
かします|Cho mượn|A|lend
せんたくします|Giặt giũ|A|do laundry
そうじします|Dọn dẹp|A|clean
かいものします|Mua sắm|A|go shopping
しょくじします|Dùng bữa|A|have a meal
あそびます|Đi chơi|A|play, hang out
うたいます|Hát|A|sing
ひきます|Chơi (guitar, piano)|A|play (guitar, piano)
すいます|Hút (thuốc)|A|smoke
かけます|Gọi (điện thoại)|A|make (a call)
あけます|Mở|A|open
しめます|Đóng|A|close
ねます|Ngủ|A|sleep
けさ|Sáng nay|F|this morning
きょう|Hôm nay|F|today
こんばん|Tối nay|F|tonight
きょねん|Năm ngoái|F|last year
まいにち|Mỗi ngày|F|every day
まいしゅう|Mỗi tuần|F|every week
まいつき|Mỗi tháng|F|every month
まいとし|Mỗi năm|F|every year
ごぜん|Buổi sáng (AM)|F|a.m.
ごご|Buổi chiều (PM)|F|p.m.
ぜんじつ|Ngày hôm trước|F|the previous day
せんじつ|Hôm nọ|F|the other day
いちねんじゅう|Suốt cả năm|F|all year round
じかん|Tiếng, thời gian|F|hour(s), time
ふん／ぷん|Phút|F|minute(s)
はん|Rưỡi, một nửa|F|half (past)
わるい|Xấu, tệ|B|bad
すくない|Ít|B|few, little
あつい|Nóng (thời tiết, đồ vật)|B|hot
あたたかい|Ấm áp|B|warm
すずしい|Mát mẻ|B|cool
つめたい|Lạnh (đồ vật)|B|cold (to the touch)
おもしろい|Thú vị|B|interesting
いそがしい|Bận rộn|B|busy
たのしい|Vui vẻ|B|fun, enjoyable
ところ|Nơi, chỗ|E|place
きょうかい|Nhà thờ|E|church
ビル|Tòa nhà|E|building
あめ|Mưa|J|rain
ゆき|Tuyết|J|snow
ひ|Ngày, mặt trời|F|day, sun
メロン|Dưa lưới|C|melon
にがい|Đắng|B|bitter
てんきがいい|Thời tiết tốt|B|good weather
てんきがわるい|Thời tiết xấu|B|bad weather
ゲーム|Trò chơi, game|J|game
こいびと|Người yêu|G|boyfriend, girlfriend
ルームメイト|Bạn cùng phòng|G|roommate
どこか|Nơi nào đó|I|somewhere
それから|Sau đó|I|and then
ひとりで|Một mình|I|alone
かぜ|Cảm cúm|J|cold (illness)
てんき|Thời tiết|J|weather
きもちがいい|Cảm thấy sảng khoái|B|feel good
どうして|Tại sao|I|why
アニメ|Hoạt hình|J|anime
しゃしん|Ảnh|D|photo
カラオケ|Karaoke|J|karaoke
コンサート|Buổi hòa nhạc|J|concert
しあい|Trận đấu|J|match
セール|Sale|J|sale
チケット|Vé|D|ticket
まい|Tấm, tờ|I|sheets (counter)
のみもの|Đồ uống|C|drink
たべもの|Đồ ăn|C|food
やきにく|Thịt nướng|C|grilled meat
たべほうだい|Ăn buffet|C|all-you-can-eat
ラーメン|Mì Nhật|C|ramen
コース|Suất ăn|C|set course
いざかや|Quán rượu|E|izakaya
きせつ|Mùa|F|season
コメディー|Hài kịch|J|comedy
ツアー|Tour du lịch|J|tour
ジャズ|Nhạc jazz|J|jazz
どちらも|Bên nào cũng|I|both
はやい|Sớm, nhanh|B|early, fast
いちばん|Nhất|I|most
ひろい|Rộng|B|spacious
おこのみやき|Bánh xèo Nhật|C|okonomiyaki
ぜひ|Nhất định|I|by all means
そうしましょう|Làm như thế đi|I|let's do that
わかりました|Tôi đã hiểu rồi|I|I understand
ちかく|Ở gần|H|nearby
となり|Bên cạnh|H|next to
うしろ|Phía sau|H|behind
むかえに いきます|Đi đón|A|go to pick up
コップ|Cái cốc|D|cup
ナイフ|Con dao|D|knife
かんじ|Hán tự|J|kanji
たくさん|Nhiều|I|a lot
だいどころ|Nhà bếp|E|kitchen
ピザ|Bánh pizza|C|pizza
とうきょう|Thành phố Tokyo|E|Tokyo
なまえ|Tên|G|name
くに|Đất nước|J|country
がいこく|Nước ngoài|J|foreign country
おとこのひと|Người đàn ông|G|man
おんなのひと|Người phụ nữ|G|woman
だんじょ|Nam và nữ|G|men and women
く|Quận|E|ward, district
せんせい|Thầy, cô|G|teacher
いっしゅうかん|1 tuần|F|one week
あとで|Sau đó|I|later
ぜんご|Trước và sau|F|before and after
けんがく|Tham quan học tập|J|study visit
のみみず|Nước uống|C|drinking water
いんしょく|Ăn uống|C|eating and drinking
じんぶつ|Nhân vật|G|character, person
けんぶつ|Tham quan|J|sightseeing
やすみのひ|Ngày nghỉ|F|day off
きゅうじつ|Ngày nghỉ (cách đọc khác)|F|holiday
らいにち|Đến Nhật|J|coming to Japan
ひがえり|Đi về trong ngày|J|day trip
きこく|Về nước|J|returning home
のみかい|Buổi nhậu|J|drinking party
こっかい|Quốc hội|J|parliament
かいけん|Cuộc họp|J|meeting
かいしゃ|Công ty|E|company
しゃかい|Xã hội|J|society
しんぶん|Tờ báo|D|newspaper
どくしょ|Đọc sách|J|reading
よみもの|Đồ để đọc|D|reading material
じしょ|Từ điển|D|dictionary
かいわ|Hội thoại|J|conversation
げんご|Ngôn ngữ|J|language
ことば|Từ vựng|J|word
たんぼ|Ruộng|J|rice field
たなか|Tanaka (họ)|G|Tanaka
すいでん|Ruộng nước|J|paddy field
ちから|Sức lực|J|strength
すいりょく|Thủy lực|J|hydraulic power
かりょく|Hỏa lực|J|firepower
りょうきん|Chi phí|J|fee
はんとし|Nửa năm|F|half a year
はんつき|Nửa tháng|F|half a month
はんにち|Nửa ngày|F|half a day
はんぶん|Phần nửa|J|half
じはん|~ giờ rưỡi|F|half past
おとな|Người lớn|G|adult
たいかい|Đại hội|J|convention
こびと|Người tí hon, người lùn|G|little person
しょうがっこう|Trường tiểu học|E|elementary school`.split('\n').map((l,i)=>{const[k,m,c,e]=l.split('|');return{id:i,k,m,t:c[0],e:e||EN[i]||m}});

const GR=[
{l:'Bài 4',t:'Adjectives: affirmative & negative',r:'Adj-i: drop い + くないです (いい → よくないです). Adj-na and nouns: じゃありません. Special: きれい, ゆうめい, きらい are Adj-na even though they end in い.',q:[
'Negative of あたらしい?|あたらしくないです|あたらしいくないです|あたらしじゃありません|あたらしくなかったです|Adj-i: drop い and add くないです. くなかった is the past tense.',
'Negative of しずか?|しずかじゃありません|しずかくないです|しずかないです|しずかじゃないくです|しずか is an Adj-na, so it takes じゃありません.',
'Negative of いいです?|よくないです|いくないです|いいくないです|いいじゃありません|いい is irregular: it becomes よ before くない.',
'ベトナムは＿＿です。|きれい|きれいな|きれくない|きれいい|An Adj-na as predicate is just the stem + です. な is only used before a noun.',
'Which one is an Adj-na even though it ends in い?|きらい|あつい|さむい|すずしい|きらい (dislike) is an Adj-na. The others are regular Adj-i.']},
{l:'Bài 4',t:'Adjectives modifying nouns & joining adjectives',r:'Adj-i + N; Adj-na + な + N. N が Adj = adjective phrase (あめが おおい). Joining: そして (same direction), が (contrast).',q:[
'ベトナムは＿＿国です。|きれいな|きれい|きれいの|きれいで|An Adj-na needs な before a noun.',
'私のまちは＿＿まちです。|いい|いいな|いいの|いいが|An Adj-i attaches directly to the noun: いい + まち.',
'このこうえんは おおきいです＿＿、みどりが すくないです。|が|そして|から|と|が joins two contrasting ideas (big BUT few trees).',
'とうきょうは きれいです。＿＿、ゆうめいです。|そして|しかし|でも|だから|そして joins two similar, positive points. しかし and でも mean "but".',
'Which sentence means "There is a lot of rain"?|あめが おおいです|あめを おおいです|あめに おおいです|あめで おおいです|N が Adj describes a feature of the topic, so the particle is が.']},
{l:'Bài 4',t:'Transport で & asking duration',r:'N (transport) で V ます; on foot: あるいて いきます (no で). 何で = by what? P1 から P2 まで どのくらいですか → ~くらいです.',q:[
'くるま＿＿ いきます。|で|を|に|が|で marks the means of transport.',
'How do you say "go on foot"?|あるいて いきます|あるいで いきます|あるきで いきます|あるいてで いきます|On foot uses the て-form あるいて, with no で.',
'Which question asks "by what means?"|なんで いきますか|なにを いきますか|どこで いきますか|だれで いきますか|何で (なんで) asks for the means of transport.',
'Which question asks "how long does it take?"|どのくらいですか|どこですか|なんですか|いくつですか|どのくらい asks about duration or amount.',
'うちから がっこうまで 5ふん＿＿です。|くらい|だけ|しか|ずつ|くらい means "about" after a quantity. しか needs a negative.']},
{l:'Bài 5',t:'Past tense: verbs, nouns, adjectives',r:'V ました / V ませんでした. N でした / N じゃありませんでした. Adj-i: ~かったです / ~くなかったです (いい → よかったです). Adj-na works like N.',q:[
'Past form of たべます?|たべました|たべます でした|たべたです|たべませんでした|Polite past: stem + ました. ませんでした is the negative past.',
'Negative past of いきます?|いきませんでした|いきましたん|いきなかったです|いきません|Polite negative past: stem + ませんでした.',
'Past of たのしいです?|たのしかったです|たのしいでした|たのしでした|たのしくなかったです|Adj-i past: drop い and add かったです.',
'Past of いいです?|よかったです|いかったです|いいでした|よくなかったです|いい conjugates from よい, so the past is よかったです.',
'きのうの パーティーは にぎやか＿＿。|でした|かったです|くなかったです|です|Adj-na past: stem + でした. きのう signals the past.']},
{l:'Bài 5',t:'Doing things with someone, どこか / なにか',r:'N と V ます (with whom). Alone: ひとりで. どこか(へ) / なにか(を) V ましたか; answer No: どこも / なにも V ませんでした.',q:[
'ともだち＿＿ べんきょうします。|と|で|を|に|と marks the person you do something with.',
'Which means "I study alone"?|ひとりで べんきょうします|ひとりと べんきょうします|ひとりに べんきょうします|ひとりを べんきょうします|ひとりで = alone. で marks the manner.',
'きのう、＿＿ へ いきましたか。はい、いきました。|どこか|どこも|なにか|だれか|どこか = somewhere. どこも needs a negative verb.',
'いいえ、＿＿ たべませんでした。|なにも|なにか|どこも|なにを|なにも + negative = nothing at all.',
'Which asks "Who do you study with?"|だれと べんきょうしますか|どこと べんきょうしますか|なにと べんきょうしますか|だれか べんきょうしますか|だれ (who) + と (with).']},
{l:'Bài 5',t:'Likes, wants, reasons & purpose',r:'N が すき / きらい / ほしい です. V たいです (stem + たい). どうして ~? → ~から. P へ V に いきます (V in stem form).',q:[
'私は ベトナムの たべものが＿＿。|すきです|すきな です|すきを です|すきに です|Likes and dislikes take が: N が すきです.',
'Which means "I want to study"?|べんきょうしたいです|べんきょうますたいです|べんきょうしますたいです|べんきょうしたです|Stem (drop ます) + たいです: べんきょうし + たいです.',
'＿＿ FPTだいがくで べんきょうしますか。いいですから。|どうして|どこ|だれ|いつ|The answer ~から gives a reason, so the question word is どうして (why).',
'In いいですから, what does から mean?|because|until|than|only|から after a clause gives a reason.',
'たべ＿＿ いきます。|に|で|を|が|V-stem + に いきます = go in order to do V.']},
{l:'Bài 6',t:'Invitations, refusals & events',r:'いっしょに ~ V ませんか → accept: いいですね / V ましょう. Decline: すみません、~から. P で N (event) が あります; P に N (thing) が あります.',q:[
'いっしょに えいがを みません＿＿。|か|ね|よ|を|V ませんか is the invitation pattern. か makes it a question.',
'Which accepts "いっしょに えいがを みませんか"?|いいですね。みましょう。|すみません。ちょっと…|いいえ、だいじょうぶです|ありがとう|いいですね + V ましょう shows agreement. すみません、ちょっと… is a polite refusal.',
'ハノイ＿＿ コンサートが あります。|で|に|を|は|Events take place at a location marked by で.',
'つくえの うえ＿＿ ほんが あります。|に|で|を|と|The existence of a thing is marked with に + あります.',
'いそがしいです＿＿、いけません。|から|まで|より|も|から gives the reason "because".']},
{l:'Bài 6',t:'Superlative & comparison',r:'Superlative: range で N が いちばん Adj. Two items: A と B と どちらが Adj か → ~の ほうが Adj / どちらも Adj. A は B より Adj (affirmative only).',q:[
'Which word makes the superlative "the most"?|いちばん|もっと|とても|あまり|いちばん = the most. とても means "very".',
'すしと ラーメンと＿＿が すきですか。|どちら|どれ|だれ|いつ|When comparing two items, ask with どちら.',
'すしの＿＿が すきです。|ほう|ほし|いちばん|より|A の ほうが = "the A side is preferred".',
'How do you say "I like both"?|どちらも すきです|どちらが すきです|どれも すきです|いちばん すきです|どちらも = both of two.',
'ホーチミンしは ハノイ＿＿ ひとが おおいです。|より|から|まで|ほど|A は B より Adj = A is more Adj than B.']},
{l:'Bài 6',t:'もう & まだ',r:'もう V ましたか → はい、もう V ました / いいえ、まだです.',q:[
'もう カレーを たべましたか。Answer "not yet":|いいえ、まだです|いいえ、もうです|はい、まだです|いいえ、もう|"Not yet" = いいえ、まだです.',
'What does もう mean in もう ~ V ましたか?|already|not yet|definitely|very|もう + past tense asks "have you already ~?".',
'What does まだ mean in いいえ、まだです?|not yet|already|together|many|まだ = still / not yet.',
'もう ごはんを たべましたか。はい、＿＿ たべました。|もう|まだ|いつも|あまり|はい、もう V ました = "Yes, I already did."',
'Which asks "Have you eaten yet?"|もう ごはんを たべましたか|まだ ごはんを たべましたか|もう ごはんを たべません|まだ ごはんを たべます|もう + V ましたか (past) asks if it has already happened.']},
{l:'Bài 7',t:'あります / います & positions',r:'P に N が あります (things) / います (people, animals). N は P に あります / います. Positions: うえ, した, なか, そと, となり, あいだ, まえ, うしろ.',q:[
'木の うえに ねこが＿＿。|います|あります|ありました|いりません|Living things use います.',
'かばんの なかに さいふが＿＿。|あります|います|いません|いりません|Inanimate objects use あります.',
'Which asks "Who is there?"|だれが いますか|だれが ありますか|なにが いますか|だれは いますか|だれ (who) pairs with います for people.',
'What does なか mean?|inside|outside|on top|next to|なか = inside. そと is outside.',
'Which word means "next to"?|となり|なか|うえ|あいだ|となり = next to. あいだ = between.']},
{l:'Bài 7',t:'V-かた, わかります & ～ましょうか',r:'V-stem + かた = way of doing. N の V かた が わかります / わかりません. V ましょうか = "Shall I ~?"; reply: おねがいします / いいえ、だいじょうぶです.',q:[
'Make "way of reading" from よみます:|よみかた|よむかた|よましかた|よみますかた|Drop ます and add かた.',
'でんしレンジの つかいかた＿＿ わかりません。|が|を|に|で|わかります / わかりません mark the thing understood with が.',
'てつだい＿＿か。|ましょう|ます|ません|たい|V ましょうか = "Shall I ~ for you?"',
'A: てつだいましょうか。 B: ＿＿。|おねがいします|いただきます|ごちそうさま|おやすみなさい|おねがいします accepts an offer of help.',
'カレーの＿＿を おしえてください。|つくりかた|つくるかた|つくかた|つくりますかた|Verb stem つくり + かた = way of making.']},
{l:'Bài 7',t:'て-form, ～ています & ～てください',r:'Group 1: い・ち・り → って; み・に・び → んで; き → いて (いきます → いって); ぎ → いで; し → して. Groups 2 & 3: drop ます + て. V ています = is doing. V てください = please do.',q:[
'て-form of かいます?|かって|かいて|かんで|かいで|い・ち・り endings become って.',
'て-form of のみます?|のんで|のいて|のって|のみて|み・に・び endings become んで.',
'て-form of かきます?|かいて|かいで|かって|かんで|き becomes いて. ぎ becomes いで.',
'て-form of いきます (irregular)?|いって|いいて|いきて|いんで|いきます is the exception: いって, not いいて.',
'かんじを よんで＿＿。|ください|います|ましょう|ませんか|V て + ください = please do V.']}
];

const VI=[
{t:'Tính từ: khẳng định & phủ định',r:'Adj-i: bỏ い + くないです (いい → よくないです). Adj-na và danh từ: じゃありません. Đặc biệt: きれい, ゆうめい, きらい là Adj-na dù có đuôi い.',q:[
'Thể phủ định của あたらしい?|Adj-i: bỏ い và thêm くないです. くなかった là thì quá khứ.',
'Thể phủ định của しずか?|しずか là Adj-na nên dùng じゃありません.',
'Thể phủ định của いいです?|いい là bất quy tắc: đổi thành よ trước くない.',
'|Adj-na làm vị ngữ chỉ cần gốc từ + です. な chỉ dùng trước danh từ.',
'Tính từ nào là Adj-na dù kết thúc bằng い?|きらい (ghét) là Adj-na. Các từ còn lại là Adj-i bình thường.']},
{t:'Tính từ bổ nghĩa danh từ & nối tính từ',r:'Adj-i + N; Adj-na + な + N. N が Adj = cụm tính từ (あめが おおい). Nối: そして (cùng chiều), が (tương phản).',q:[
'|Adj-na cần な trước danh từ.',
'|Adj-i đi thẳng với danh từ: いい + まち.',
'|が nối hai ý tương phản (to NHƯNG ít cây xanh).',
'|そして nối hai ý tương đồng, tích cực. しかし và でも nghĩa là "nhưng".',
'Câu nào nghĩa là "Mưa nhiều"?|N が Adj mô tả đặc điểm của chủ đề nên trợ từ là が.']},
{t:'Phương tiện で & hỏi thời gian',r:'N (phương tiện) で V ます; đi bộ: あるいて いきます (không dùng で). 何で = bằng gì? P1 から P2 まで どのくらいですか → ~くらいです.',q:[
'|で chỉ phương tiện di chuyển.',
'Nói "đi bộ" như thế nào?|Đi bộ dùng thể て あるいて, không có で.',
'Câu nào hỏi "bằng phương tiện gì?"|何で (なんで) hỏi phương tiện.',
'Câu nào hỏi "mất bao lâu?"|どのくらい hỏi khoảng thời gian hoặc số lượng.',
'|くらい nghĩa là "khoảng" sau số lượng. しか phải đi với phủ định.']},
{t:'Thì quá khứ: động từ, danh từ, tính từ',r:'V ました / V ませんでした. N でした / N じゃありませんでした. Adj-i: ~かったです / ~くなかったです (いい → よかったです). Adj-na như N.',q:[
'Thể quá khứ của たべます?|Quá khứ lịch sự: gốc + ました. ませんでした là phủ định quá khứ.',
'Phủ định quá khứ của いきます?|Phủ định quá khứ lịch sự: gốc + ませんでした.',
'Quá khứ của たのしいです?|Adj-i quá khứ: bỏ い và thêm かったです.',
'Quá khứ của いいです?|いい chia từ よい nên quá khứ là よかったです.',
'|Adj-na quá khứ: gốc + でした. きのう báo hiệu quá khứ.']},
{t:'Làm gì cùng ai, どこか / なにか',r:'N と V ます (cùng ai). Một mình: ひとりで. どこか(へ) / なにか(を) V ましたか; trả lời Không: どこも / なにも V ませんでした.',q:[
'|と chỉ người cùng làm.',
'Câu nào nghĩa là "Tôi học một mình"?|ひとりで = một mình. で chỉ cách thức.',
'|どこか = đâu đó. どこも cần động từ phủ định.',
'|なにも + phủ định = không gì cả.',
'Câu nào hỏi "Bạn học với ai?"|だれ (ai) + と (cùng).']},
{t:'Thích, muốn, lý do & mục đích',r:'N が すき / きらい / ほしい です. V たいです (gốc + たい). どうして ~? → ~から. P へ V に いきます (V ở dạng gốc).',q:[
'|Thích/ghét dùng が: N が すきです.',
'Câu nào nghĩa là "Tôi muốn học"?|Gốc (bỏ ます) + たいです: べんきょうし + たいです.',
'|Câu trả lời ~から nêu lý do nên từ hỏi là どうして (tại sao).',
'Trong いいですから, から nghĩa là gì?|から sau mệnh đề nêu lý do.|vì|cho đến khi|hơn|chỉ',
'|V-gốc + に いきます = đi để làm V.']},
{t:'Lời mời, từ chối & sự kiện',r:'いっしょに ~ V ませんか → đồng ý: いいですね / V ましょう. Từ chối: すみません、~から. P で N (sự kiện) が あります; P に N (vật) が あります.',q:[
'|V ませんか là mẫu mời rủ. か tạo câu hỏi.',
'Câu nào đồng ý lời mời "いっしょに えいがを みませんか"?|いいですね + V ましょう thể hiện sự đồng ý. すみません、ちょっと… là từ chối lịch sự.',
'|Sự kiện diễn ra ở địa điểm đánh dấu bằng で.',
'|Sự tồn tại của vật dùng に + あります.',
'|から nêu lý do "vì".']},
{t:'So sánh nhất & so sánh hơn',r:'So sánh nhất: phạm vi で N が いちばん Adj. Hai đối tượng: A と B と どちらが Adj か → ~の ほうが Adj / どちらも Adj. A は B より Adj (chỉ câu khẳng định).',q:[
'Từ nào tạo nghĩa "nhất"?|いちばん = nhất. とても nghĩa là "rất".',
'|So sánh hai đối tượng thì hỏi bằng どちら.',
'|A の ほうが = "bên A được thích hơn".',
'Nói "Tôi thích cả hai" như thế nào?|どちらも = cả hai.',
'|A は B より Adj = A Adj hơn B.']},
{t:'もう & まだ',r:'もう V ましたか → はい、もう V ました / いいえ、まだです.',q:[
'もう カレーを たべましたか。Trả lời "chưa":|"Chưa" = いいえ、まだです.',
'もう trong もう ~ V ましたか nghĩa là gì?|もう + quá khứ hỏi "đã ~ chưa?".|đã, rồi|chưa|chắc chắn|rất',
'まだ trong いいえ、まだです nghĩa là gì?|まだ = vẫn chưa.|chưa|đã, rồi|cùng nhau|nhiều',
'|はい、もう V ました = "Vâng, tôi đã làm rồi".',
'Câu nào hỏi "Bạn ăn chưa?"|もう + V ましたか (quá khứ) hỏi việc đã xảy ra chưa.']},
{t:'あります / います & vị trí',r:'P に N が あります (đồ vật) / います (người, động vật). N は P に あります / います. Vị trí: うえ, した, なか, そと, となり, あいだ, まえ, うしろ.',q:[
'|Sinh vật sống dùng います.',
'|Đồ vật vô tri dùng あります.',
'Câu nào hỏi "Ai ở đó?"|だれ (ai) đi với います cho người.',
'なか nghĩa là gì?|なか = bên trong. そと là bên ngoài.|bên trong|bên ngoài|bên trên|bên cạnh',
'Từ nào nghĩa là "bên cạnh"?|となり = bên cạnh. あいだ = ở giữa.']},
{t:'V-かた, わかります & ～ましょうか',r:'V-gốc + かた = cách làm. N の V かた が わかります / わかりません. V ましょうか = "Để tôi ~ nhé?"; đáp: おねがいします / いいえ、だいじょうぶです.',q:[
'Tạo "cách đọc" từ よみます:|Bỏ ます và thêm かた.',
'|わかります / わかりません đánh dấu thứ được hiểu bằng が.',
'|V ましょうか = "Để tôi ~ giúp nhé?"',
'|おねがいします dùng để nhận lời đề nghị giúp.',
'|Gốc động từ つくり + かた = cách làm.']},
{t:'Thể て, ～ています & ～てください',r:'Nhóm 1: い・ち・り → って; み・に・び → んで; き → いて (いきます → いって); ぎ → いで; し → して. Nhóm 2 & 3: bỏ ます + て. V ています = đang V. V てください = xin hãy V.',q:[
'Thể て của かいます?|Đuôi い・ち・り chuyển thành って.',
'Thể て của のみます?|Đuôi み・に・び chuyển thành んで.',
'Thể て của かきます?|き chuyển thành いて. ぎ chuyển thành いで.',
'Thể て của いきます (bất quy tắc)?|いきます là ngoại lệ: いって, không phải いいて.',
'|V て + ください = xin hãy V.']}
];

const GN=[
{l:'Bài 4',t:['Phó từ chỉ mức độ & どうですか','Degree adverbs & どうですか'],r:['S は とても (rất) / すこし (hơi) Adj です; あまり (không ~ lắm) + Adj くないです / じゃありません. Hỏi: S は どうですか (tính từ) / どんな N ですか (Adj-i + N; Adj-na + な + N).','S は とても (very) / すこし (a little) Adj です; あまり (not very) + negative Adj. Ask: S は どうですか / どんな N ですか (Adj-i + N; Adj-na + な + N).'],q:[
'この こうえんは＿＿ おおきいです。[rất / very]|とても|あまり|ぜんぜん|いちばん|とても đi với câu khẳng định.|とても = very, used with an affirmative adjective.',
'ここは＿＿ しずかじゃありません。[không ~ lắm / not very]|あまり|とても|すこし|いちばん|あまり luôn đi với dạng phủ định.|あまり always goes with a negative.',
'A: ベトナムの なつは どうですか。 B: ＿＿。|あついです|あつなです|あつくです|あついなです|どうですか được trả lời bằng Adj + です.|どうですか is answered with Adj + です.',
'A: ベトナムは どんな くにですか。 B: ＿＿ くにです。|きれいな|きれい|きれいの|きれいで|どんな N → Adj-na + な + N.|どんな N ですか → Adj-na + な + N.']},
{l:'Bài 4',t:['Vị trí trong nước & P に N が あります','Location in a country & P に N が あります'],r:['A は B の きた / まんなか / みなみ です. P に N が あります (P có N); hỏi: P に 何が ありますか. Cuối câu: ね = xác nhận, đồng tình; よ = báo tin mới, nhấn mạnh.','A は B の きた / まんなか / みなみ です. P に N が あります (P has N); ask P に 何が ありますか. Sentence-final ね = seeking agreement; よ = telling something new, emphasis.'],q:[
'ほっかいどうは 日本の＿＿です。[bắc / north]|きた|みなみ|ひがし|まんなか|きた = bắc, みなみ = nam.|きた = north, みなみ = south.',
'ながのは 日本の＿＿です。[trung tâm / centre]|まんなか|きた|みなみ|にし|まんなか = ở giữa, trung tâm.|まんなか = the middle.',
'ブンタウに ＿＿が ありますか。[gì / what]|何|だれ|どこ|いつ|何 (なに) hỏi về vật.|何 (なに) asks about things.',
'あしたは やすみです＿＿。[báo tin / telling]|よ|ね|か|を|よ báo tin mới hoặc nhấn mạnh; ね xin đồng tình.|よ announces new info; ね seeks agreement.']},
{l:'Bài 7',t:['Dụng cụ で & おきます / いれます / だします','Tools で & おきます / いれます / だします'],r:['N (dụng cụ) で V ます: はしで たべます. Place に N を おきます / いれます; Place から N を だします; Place へ N を もって いきます / きます.','N (tool) で V: はしで たべます. Place に N を おきます / いれます; Place から N を だします; Place へ N を もって いきます / きます.'],q:[
'ベトナムじんは はし＿＿ たべます。|で|を|に|と|で chỉ dụng cụ, cách thức.|で marks the tool or means.',
'れいぞうこ＿＿ ぎゅうにくを いれます。|に|で|から|を|いれます → nơi đến dùng に.|いれます takes に for the destination.',
'かばん＿＿ さいふを だします。|から|に|で|を|だします → lấy ra từ đâu thì dùng から.|だします takes から for the source.',
'がっこうへ ほんを＿＿ いきます。[mang đi / take]|もって|もち|もつ|もちます|もって いきます dùng thể て.|もって いきます uses the て-form.']}
];

const SPK=[[1, 0, "こんにちは！私はさとうです。おおさか大学のせんせいです。私のたんじょうびは4がつ5日です。しゅみはサッカーです。まいにちサッカーをします。ときどきこうえんにいって、ともだちといっしょにサッカーをします。しごとはいそがしいですが、たのしいです。"], [2, 0, "おはようございます！こちらはリーさんです。リーさんはちゅうごく人です。かれのしゅみはおんがくです。 今、京都たんき大学の学生です。学校で日本語をべんきょうしています。ひまなときにはともだちとカラオケにいきます。"], [3, 3, "日曜日、ともだちとちかくの山にのぼりました。てんきがよかったですから、とてもきもちがよかったです。山でおべんとうを食べました。山からのけしきはとてもきれいでした。それから、古いお寺を見に行きました。とてもおもしろかったです。とてもたのしい1日でした。また行きたいです。"], [4, 1, "わたしのまちはしずかです。ふるいおてらがおおいです。きれいなかわがあります。たかいやまもあります。しずかです。ここはちいさいですが、いいです。"], [5, 2, "私はベトナムのダナンからきました。ダナンはベトナムのまんなかです。ダナンはちいさいですが、とてもにぎやかなところです。ふるいお寺やびじゅつかんなどがあります。お寺はとてもきれいです。8月に花火のまつりがあります。いろいろな国の花火があります。とてもきれいです。ダナンはなつ、あついです。そして、あめがおおいです。ダナンはいいところです。みなさん、ぜひきてください。"], [6, 2, "パクさんは かんこくじんです。今年 は 21才です。さくら 日本語 学校の 学生です。うちは かんこくのソウルです。ソウルは かんこくの にしです。東京から ソウルまでひこうき で 2時間 ぐらいです。ソウルは にぎやかです。そして おおきいまちです。ソウルは 12月、さむいです。ゆきが おおいです。ふゆになったら トッポッキ をたべます。とてもおいしいですが、からいです。"], [7, 2, "日曜日、ともだちと ちかくのやまにのぼりました。てんきがよかったですから、とてもきもちがよかったです。やまで、おべんとうをたべました。やまからの けしきがとてもきれいでした。それから、ふるいお寺を見に行きました。とてもおもしろかったです。とてもたのしい1日でした。また行きたいです。"], [8, 2, "私はメアリです。私は イタリアのフィレンツェから来ました。フィレンツェはイタリアのすこし きたです。フィレンツェは とても にぎやかなところです。ふるいきょうかいやびじゅつかんなどがあります。きょうかいはとてもきれいです。2月にチョコレートのまつりがあります。いろいろな チョコレートがあります。とてもおいしいです。フィレンツェははる、あたたかいです。そして、雨がすくないです。フィレンツェは いいところです。"], [9, 2, "すみません、ちょっときいてください。あそこにとけいがみえますか。ええ、みえます。あれは私のとけいです。でも、今は時間がわかりません。とけいがこわれています。新しいとけいを買いに行きます。"], [10, 4, "今日は雨ですが、うちで本を読みます。きのうはいいてんきでした。きのうはこうえんでテニスをしました。テニスはとてもたのしかったです。あしたはともだちとえいがを見ます。おもしろいえいががいいです。来週は日本へ行きます。日本の食べ物はおいしいです。すしがだいすきです。すしはせかいでいちばんおいしいです。日本では、たくさんのすしをたべたいです。それから、京都にもいきたいです。京都は日本の古いまちです。きれいなまちだとおもいます。日本りょこうがたのしみです。"], [11, 5, "私はミンです。ベトナムのハノイから 来ました。ハノイはベトナムのきたです。とても しずかな ところです。ふるい お寺や びじゅつかん などが あります。お寺は とてもきれいです。ハノイは ふゆ、すこし さむいです。あめが あまり おおくないです。ハノイは いいところです。"], [12, 5, "私は パクです。私の まちは かんこくのソウルです。ソウルは おおきい まちです。そして、いい ところです。ソウルに おおきい かわが あります。かわは とても きれいです。ソウルは ふゆ、とても さむいです。みなさん、かんこくへ来てください。"], [13, 5, "メアリーさんは イタリア人です。38才です。さくら 学校の 先生です。うちは イタリアの ナポリです。ナポリは イタリアの みなみです。東京から ローマまで ひこうきで 12時間半くらいです。ローマから ナポリまで バスで 3時間です。ナポリは とても きれいです。そして しずかです。 てんきが いいです。"], [14, 5, "私のまちは きれいです。ふるいお寺 や びじゅつかん などが あります。なつに メロンの ジュースを のみます。 すこし あまいですが、とても おいしいです。そして つめたいです。食べ物もおいしいです。皆さん、ぜひ、来てください。"], [15, 5, "しゅうまつ、てんきが よかったです。私は こうえんへ いきました。ともだちに 会いました。さくらを 見ました。きれいでした。それから、インドの レストランで 食事しました。とても おいしかったです。よる、デパートへ 行きました。何も 買いませんでした。たかかったですから。たのしい 一日 でした。"], [16, 5, "先週の日よう日、ともだちとやまにのぼりました。てんきがよかったですから、とてもきもちがよかったです。やまでおべんとうを食べました。 ここの けしきは とてもきれいでした。それから、ふるいきょうかいを見に行きました。とてもおもしろかったです。とてもたのしい一日でした。また行きたいです。"], [17, 5, "先週の土曜日、私はこうえんでバーベキューをしました。それから、たかいやまにのぼりました。ここのけしきはとてもきれいでした。とてもおもしろかったです。とてもたのしい一日でした。また 行きたいです。"], [18, 5, "土曜日、ともだちと うみへ 行きました。 てんきが よかったですから、とても きもちが よかったです。 うみで ビールを 飲みました。バーベキューを しました。けしきは とても きれいでした。 それから、ふるい きょうかいを見に 行きました。とても おもしろかったです。 たのしい 1日でした。 また 行きたいです。"], [19, 5, "私は スポーツが すきです。テニスと すいえいを します。サッカーは しません。にちようび かぞくと テニスを します。とても たのしいです。それから、プールへ いきます。まいにち テニスと すいえいを したいです。"], [20, 5, "日曜日 ともだち のうちへ 行きました。そこで ゲームを しました。コーヒーを 飲みました。とても たのしかったです。それから、日本の レストランで 食事しました。とても おいしかったですが、たかかったです。よる、デパートへ 買い物に 行きました。 デパートで ともだちと しゃしんを とりました。"], [21, 5, "私は スポーツが すきです。テニスと すいえいを します。サッカーは しません。 テニスは 土曜日に かぞくと します。そして ときどき プールに 行きます。かわで およぎます。私は 今 とても たのしいです。げんきです。 テニスと すいえいを したいです。"], [22, 5, "今週の土曜日の午後はいそがしいですか。 わたしの国の たいしかんで パーティーがあります。 いっしょに行きませんか。 木曜日の あさまでに へんじをください。"], [23, 5, "みなさんは 日本の 食べ物で 何が いちばん すきですか。 私は おこのみやきが いちばん すきです。 おこのみやきは 日本のピザです。 おこのみやきの なかに ぶたにく や たまご や やさいが あります。 おこのみやきの ソースは すこし あまいです。 とても おいしいですよ。 こんど いっしょに おこのみやきを 食べに 行きませんか。"], [24, 5, "私は あさ 時間が ありません。えきで パンを 買って 食べます。ひるごはんも しごとが いそがしいですから、 パンと ぎゅうにゅうです。ばんごはんは、うちのちかくの レストランで ゆっくり ごはんを 食べます。"], [25, 5, "メアリーさんは 会社いんです。 東京に います。毎日、7時に おきます。8時に 会社へ 行きます。午後5時まで しごとを します。よる 9時ごろ うちへ 帰ります。ばんごはんを 食べます。テレビを 見ます。それから、インターネットをして、でんわで こいびとと 話します。11時ごろ ねます。"], [26, 5, "私は ダニエルです。かぞくは 4人です。あに は 会社いんです。ちちは 大学で おしえています。はは は びょういんで はたらいています。私は ひろしま 大学の1年生です。"], [27, 5, "きのうの あさ 私は 一人で としょかんへ 行きました。それから、スーパーで 買いものを しました。午後、ともだちの すずきさんに 会いました。ゆうがた、うちへ 帰りました。そして、えいごを べんきょうしました。"], [28, 5, "みなさん、来週の日曜日、私のうちで パーティーをします。私は国の 料理を つくります。 いっしょに つくりませんか。 それから、みなさんの国の 料理を つくって、いっしょに 食べましょう。おいしい おさけも 飲みましょう。 私のアパートは えきの ちかくに あります。 コンビニの となりの あたらしい アパートです。 ぜひ、来てください。"], [29, 5, "きのう、キムさんと デパートで 買いものを しました。 4かいへ 行きました。シャツを 見ました。ふくやに シャツが たくさん ありました。キムさんは 小さいシャツを 買いました。私は 大きいシャツを 買いました。それから、時間が ありましたから、1かいで えいがを 見ました。帰りました。"], [30, 5, "田中さんの おとうさんは ごはんと みそしるが すきです。パンは あまり すきじゃありません。 田中さんの おかあさんも ごはんと みそしるが すきです。パンも よく 食べます。おかあさんは たまごは あまり 食べません。 田中さんは いつも ごはんと 肉を 食べます。貝も すきです。パンは あまり 食べません。 くだものも すきじゃありません。"], [31, 5, "私は 大学のとき、日本の えいがを フランス語で 見ました。とても、おもしろかったです。 日本の おもしろいことを たくさん 見たいですから、 日本へ来ました。今、日本語を べんきょうしています。"], [32, 5, "私は ベトナムのハノイから きました。ハノイは ベトナムのきたです。とても きれいです。ふるいお寺や びじゅつかんが あります。おいしい食べ物が おおいです。なつ、てんきが いいです。そして、あめが すくないです。こうえんで バーベキューをします。ハノイは いいところです。なつやすみ、ハノイへ帰りたいです。"], [33, 5, "しゅうまつ、ひまでした。私は ともだちと えいがを 見に行きました。おもしろいえいがでした。それから、ちゅうごくのレストランで ひるごはんを 食べました。おいしかったです。レストランで 大学の先生に 会いました。先生は かぞくと ごはんを 食べました。よる、へやを そうじしました。それから、せんたくしました。"], [34, 5, "私のまちは にぎやかです。たかい ビルがおおいです。きょうかいも あります。とても きれいです。まちは はる、すずしいです。おはなみに行きます。あきにおまつりを見ます。とても おもしろいです。みなさん、ぜひ来てください。"], [35, 5, "今日 小学校の後ろで 田中先生に 会いました。本田さんも来ました。お寺の見学について たくさん話しました。それから、5時半に 帰りました。 野菜をきって、料理をつくって、一人で 食べました。"]];

const ROM={1:"こんにちは/konnichiwa|！/|私は/watashi wa|さとうです/satō desu|。/|おおさか/Ōsaka|大学の/daigaku no|せんせいです/sensei desu|。/|私の/watashi no|たんじょうびは/tanjōbi wa|4がつ5日です/shigatsu itsuka desu|。/|しゅみは/shumi wa|サッカーです/sakkā desu|。/|まいにち/mainichi|サッカーを/sakkā o|します/shimasu|。/|ときどき/tokidoki|こうえんに/kōen ni|いって/itte|、/|ともだちと/tomodachi to|いっしょに/issho ni|サッカーを/sakkā o|します/shimasu|。/|しごとは/shigoto wa|いそがしいですが/isogashii desu ga|、/|たのしいです/tanoshii desu|。/",2:"おはようございます/ohayō gozaimasu|！/|こちらは/kochira wa|リーさんです/Rī-san desu|。/|リーさんは/Rī-san wa|ちゅうごく人です/chūgokujin desu|。/|かれの/kare no|しゅみは/shumi wa|おんがくです/ongaku desu|。/| 今/ima|、/|京都/Kyōto|たんき大学の/tanki daigaku no|学生です/gakusei desu|。/|学校で/gakkō de|日本語を/nihongo o|べんきょうしています/benkyō shite imasu|。/|ひまなときには/hima na toki ni wa|ともだちと/tomodachi to|カラオケに/karaoke ni|いきます/ikimasu|。/",3:"日曜日/nichiyōbi|、/|ともだちと/tomodachi to|ちかくの/chikaku no|山に/yama ni|のぼりました/noborimashita|。/|てんきが/tenki ga|よかったですから/yokatta desu kara|、/|とても/totemo|きもちが/kimochi ga|よかったです/yokatta desu|。/|山で/yama de|おべんとうを/obentō o|食べました/tabemashita|。/|山からの/yama kara no|けしきは/keshiki wa|とても/totemo|きれいでした/kirei deshita|。/|それから/sorekara|、/|古い/furui|お寺を/otera o|見に/mi ni|行きました/ikimashita|。/|とても/totemo|おもしろかったです/omoshirokatta desu|。/|とても/totemo|たのしい/tanoshii|1日でした/ichinichi deshita|。/|また/mata|行きたいです/ikitai desu|。/",4:"わたしの/watashi no|まちは/machi wa|しずかです/shizuka desu|。/|ふるい/furui|おてらが/otera ga|おおいです/ōi desu|。/|きれいな/kirei na|かわが/kawa ga|あります/arimasu|。/|たかい/takai|やまも/yama mo|あります/arimasu|。/|しずかです/shizuka desu|。/|ここは/koko wa|ちいさいですが/chiisai desu ga|、/|いいです/ii desu|。/",7:"日曜日/nichiyōbi|、/|ともだちと /tomodachi to|ちかくの/chikaku no|やまに/yama ni|のぼりました/noborimashita|。/|てんきが/tenki ga|よかったですから/yokatta desu kara|、/|とても/totemo|きもちが/kimochi ga|よかったです/yokatta desu|。/|やまで/yama de|、/|おべんとうを/obentō o|たべました/tabemashita|。/|やまからの /yama kara no|けしきが/keshiki ga|とても/totemo|きれいでした/kirei deshita|。/|それから/sorekara|、/|ふるい/furui|お寺を/otera o|見に/mi ni|行きました/ikimashita|。/|とても/totemo|おもしろかったです/omoshirokatta desu|。/|とても/totemo|たのしい/tanoshii|1日でした/ichinichi deshita|。/|また/mata|行きたいです/ikitai desu|。/",9:"すみません/sumimasen|、/|ちょっと/chotto|きいてください/kiite kudasai|。/|あそこに/asoko ni|とけいが/tokei ga|みえますか/miemasu ka|。/|ええ/ē|、/|みえます/miemasu|。/|あれは/are wa|私の/watashi no|とけいです/tokei desu|。/|でも/demo|、/|今は/ima wa|時間が/jikan ga|わかりません/wakarimasen|。/|とけいが/tokei ga|こわれています/kowarete imasu|。/|新しい/atarashii|とけいを/tokei o|買いに/kai ni|行きます/ikimasu|。/"};

window.JPD_DATA={T,EN,K,D,GR,VI,GN,SPK,ROM};
