'use client'
import { useEffect, useState } from 'react'
import { Button } from './ui/button'
import { useCart } from '@/hooks/use-cart'
import { Product } from '@/payload-types'

const AddToCartButton = ({
  product,
}: {
  product: Product
}) => {
  const { addItem, items } = useCart();
  const [isSuccess, setIsSuccess] = useState<boolean>(false)

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsSuccess(false)
    }, 2000)
    return () => clearTimeout(timeout)
  }, [isSuccess])

  const handleAddToCart = () => {
    const isProductInCart = items.some((item) => item.product.id === product.id);

    if (!isProductInCart) {
      addItem(product);
      setIsSuccess(true);
    }
  };

  return (
    <Button
      onClick={handleAddToCart}
      size='lg'
      className='w-full'
      disabled={isSuccess}
    >
      {isSuccess ? 'Added!' : 'Add to cart'}
    </Button>
  )
}

export default AddToCartButton
