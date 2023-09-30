const Service = ({ title, icon, description }) => {
  return (
    <>
      <h3>{title}</h3>

      <div className="main__service__icon">
        {icon}
      </div>

      <p>{description}</p>
    </>
  )
}

export default Service
