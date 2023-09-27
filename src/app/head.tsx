import React from 'react'
import logo from '../../public/logo.png'
export default function CustomHead(): JSX.Element {
  return (
    <>
      <title>Task Hive</title>
      <meta content="width=device-width, initial-scale=1.0" name="viewport" />
      <meta name="description" content="Task Hive" />
      <link
        rel="icon"
        href="../../public/logo-task.png"
        type="image/svg+xml"
        sizes="any"
      />
    </>
  )
}
