"use client"

import { useState } from "react"
import { BookOpen, X, Loader2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function Component() {
  const [showPoem, setShowPoem] = useState(false)
  const [poem, setPoem] = useState<string>("")
  const [poemTitle, setPoemTitle] = useState<string>("Garden Dreams")
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string>("")

  const generatePoem = async () => {
    setIsLoading(true)
    setError("")
    
    try {
      const response = await fetch('/api/agent', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messages: [
            {
              role: 'user',
              content: 'Please write a beautiful, inspiring poem about nature and gardens. The poem should be 3-4 stanzas long with vivid imagery and uplifting themes. Also provide a creative title for the poem. Format your response as: "Title: [TITLE]\n\n[POEM]"'
            }
          ]
        })
      })

      if (!response.ok) {
        const errorText = await response.text()
        throw new Error(`HTTP ${response.status}: ${errorText}`)
      }

      const fullResponse = await response.text()

      if (!fullResponse.trim()) {
        throw new Error('Empty response received from API')
      }

      // Parse the response to extract title and poem
      let title = "Generated Poem"
      let poemContent = fullResponse.trim()

      // Look for title in the response
      const titleMatch = fullResponse.match(/Title:\s*(.+)/i)
      if (titleMatch) {
        title = titleMatch[1].trim()
        // Remove the title line from the poem content
        poemContent = fullResponse.replace(/Title:\s*.+\n*/i, '').trim()
      }

      setPoem(poemContent)
      setPoemTitle(title)
      setShowPoem(true)
      
    } catch (err) {
      console.error('Error generating poem:', err)
      const errorMessage = err instanceof Error ? err.message : 'Unknown error occurred'
      setError(`Failed to generate poem: ${errorMessage}`)
    } finally {
      setIsLoading(false)
    }
  }

  const handleButtonClick = () => {
    if (showPoem) {
      setShowPoem(false)
    } else {
      generatePoem()
    }
  }

  return (
    <Card className="w-full max-w-lg mx-auto shadow-lg">
      <CardHeader className="text-center pb-6">
        <CardTitle className="flex items-center justify-center gap-2 text-xl">
          <BookOpen className="h-6 w-6" />
          Poetry Corner
        </CardTitle>
        <CardDescription className="mt-2">Click the button below to generate a beautiful AI poem</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6 px-8 pb-8">
        <div className="flex justify-center">
          <Button 
            onClick={handleButtonClick} 
            variant={showPoem ? "outline" : "default"} 
            className="w-full"
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Generating Poem...
              </>
            ) : showPoem ? (
              <>
                <X className="mr-2 h-4 w-4" />
                Hide Poem
              </>
            ) : (
              <>
                <BookOpen className="mr-2 h-4 w-4" />
                Generate Poem
              </>
            )}
          </Button>
        </div>

        {error && (
          <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
            <p className="text-sm text-red-700">Error: {error}</p>
          </div>
        )}

        {showPoem && poem && (
          <div className="p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl border border-purple-100 animate-in slide-in-from-top-2 duration-300 shadow-sm">
            <div className="text-center mb-4">
              <h3 className="font-semibold text-lg text-purple-800">{poemTitle}</h3>
            </div>
            <div className="text-base leading-7 text-gray-700 whitespace-pre-line font-serif px-2">{poem}</div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
