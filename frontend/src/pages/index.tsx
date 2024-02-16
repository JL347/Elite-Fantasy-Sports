import DefaultLayout from '../../layouts/default-layout'
import eliteLogo from '../../public/logos/Designer.png'
import Image from 'next/image'

const HomeScreen = () => {
  return (
    <DefaultLayout>
      <div
        className="flex justify-center items-center"
      >
        <Image src={eliteLogo} alt="Elite Logo" width={400} height={400} />
      </div>
    </DefaultLayout>
  )
}

export default HomeScreen