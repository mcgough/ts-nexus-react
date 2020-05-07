import { useState, ChangeEvent, Fragment } from 'react'
import { useMutation } from '@apollo/client'
import Router from 'next/router'
import Form from './styles/Form'
import Error from './ErrorMessage'
import CREATE_ONE_ITEM, { Response } from '../types/mutations/createOneItem'
import formatMoney from '../lib/formatMoney'

const CreateItem = () => {
  const [image, setImage] = useState<File | null>(null)
  const [title, setTitle] = useState<string>('')
  const [description, setDescription] = useState<string>('')
  const [price, setPrice] = useState<number>(0)
  const [createItem, { data, loading, error }] = useMutation<Response>(
    CREATE_ONE_ITEM
  )

  function handleChange(
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void {
    const { value, name } = e.target
    switch (name) {
      case 'title':
        setTitle(value)
        break
      case 'description':
        setDescription(value)
        break
      case 'price':
        setPrice(value ? parseFloat(value) : 0)
        break
      default:
        break
    }
  }

  function handleFileChange(e: ChangeEvent<HTMLInputElement>): void {
    const { files } = e.target
    if (files) {
      console.log(image)
      setImage(files[0])
    }
  }

  async function handleSubmit(e: Event) {
    e.preventDefault()
    await createItem({ variables: { title, description, price } })
  }

  function goToItemPage(id: string): void {
    Router.push({
      pathname: '/item',
      query: { id },
    })
  }

  if (data) goToItemPage(data.createOneItem.id)

  return (
    <Fragment>
      <Error error={error} />
      <Form onSubmit={handleSubmit}>
        <fieldset disabled={loading} aria-busy={loading}>
          <label htmlFor="file">
            Image
            <input
              type="file"
              id="file"
              name="file"
              placeholder="Upload an image"
              required
              onChange={handleFileChange}
            />
          </label>
          <label htmlFor="title">
            Title
            <input
              type="text"
              id="title"
              name="title"
              placeholder="Title"
              required
              value={title}
              onChange={handleChange}
            />
          </label>
          <label htmlFor="price">
            Price {(price && formatMoney(price)) || 0}
            <input
              type="number"
              id="price"
              name="price"
              placeholder="Price"
              required
              value={price}
              onChange={handleChange}
            />
          </label>
          <label htmlFor="description">
            Description
            <textarea
              id="description"
              name="description"
              placeholder="Description"
              required
              value={description}
              onChange={handleChange}
            />
          </label>
          <button type="submit">Submit</button>
        </fieldset>
      </Form>
    </Fragment>
  )
}

export default CreateItem
