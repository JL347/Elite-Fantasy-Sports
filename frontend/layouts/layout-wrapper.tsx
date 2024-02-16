import DefaultLayout from './default-layout'

const LayoutWrapper = (props: any) => {
  return <DefaultLayout {...props}>{props.children}</DefaultLayout>
}

export default LayoutWrapper
