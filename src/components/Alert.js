export default function Alert(props) {
  return (
    <>
      <div className="alert alert-success tw-fixed tw-z-10 tw-top-[12vh] tw-w-full tw-text-center alert-dismissible fade show" role="alert">
        <strong>{props.message}</strong>
      </div>
    </>
  )
}

