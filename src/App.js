import { useRef } from 'react'

// Bileşenimiz video oynatıcı oluşturur ve kullanıcıların videoyu oynatmasına veya duraklatmasına olanak tanır.
// useRef kullanımı ve butonların işlevselliği eksik bırakılmış.

// Görevler:
// 1. ref ile DOM elemanına erişiyoruz ancak şu an kullanımı eksik. 
//    - ref kullanarak <video> elementine erişin ve bu referansı nasıl kullanabileceğinizi açıklayın.
// 2. "Oynat" ve "Duraklat" butonları şu anda hiçbir işlevselliğe sahip değil. 
//    - onClick eventleri ekleyerek butonların ilgili işlemleri gerçekleştirmesini sağlayın.
// 3. Videonun oynatılıp oynatılmadığını takip eden state ekleyerek,
//    - Kullanıcı videoyu oynattığında buton metnini "Duraklat" olarak değiştiren yapı oluşturun.

// Bonus:
// - Tailwind CSS ile özel bir oynatma çubuğu (progress bar) ekleyin.
//   - Video ilerledikçe dolan bir progress bar nasıl oluşturulabilir? 
// - Videoya özel bir "play/pause" ikon efekti ekleyin.
//   - "glow" efekti tanımlayın ve butonlara uygulayın.
// - Video oynatıcı bileşenini mobil ekranlar için daha duyarlı hale getirin. 
//   - Mobil cihazlarda butonların düzenini optimize etmek için Tailwind’den hangi class'lar kullanılabilir?


export default function VideoPlayer() {
  const ref = useRef()

  console.log(ref.current)

  return (
    <div className='max-w-[500px] space-y-4 p-8 mx-auto'>
      <h1 ref={ref} className='text-center font-bold text-3xl'>
        Video Oynatıcı
      </h1>
      <video
        src='https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4'
        poster='https://peach.blender.org/wp-content/uploads/title_anouncement.jpg?x11217'
      />
      <div className='flex justify-between'>
        <button className='text-orange-500 font-semibold'>Duraklat</button>
        <div>Duraklatıldı</div>
        <button className='text-indigo-500 font-semibold'>Oynat</button>
      </div>
    </div>
  )
}
