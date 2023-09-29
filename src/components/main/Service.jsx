const Service = ({ title, description, icon }) => {
  return (
    <>
      <h3>{title}</h3>

      {icon}

      <p>{description}</p>
    </>
  )
}

export default Service
